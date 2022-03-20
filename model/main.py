import pandas as pd
from fastapi import FastAPI
import uvicorn
from pydantic import BaseModel
from tensorflow.keras import layers , activations , models , preprocessing , utils
import tensorflow as tf
import numpy as np


app = FastAPI()

class Chatbot(BaseModel):
    sentence : str

data_path = 'clean_conversation.txt'
input_texts = []
target_texts = []
with open(data_path, 'r', encoding='utf-8') as f:
    lines = f.read().split('\n')
for line in lines[: min(600, len(lines) - 1)]:
    input_text = line.split('\t')[0]
    target_text = line.split('\t')[1]
    input_texts.append(input_text)
    target_texts.append(target_text)

zippedList =  list(zip(input_texts, target_texts))
lines = pd.DataFrame(zippedList, columns = ['input' , 'output']) 

input_lines = list()
for line in lines.input:
    input_lines.append( line ) 

tokenizer = preprocessing.text.Tokenizer()
tokenizer.fit_on_texts( input_lines ) 
tokenized_input_lines = tokenizer.texts_to_sequences( input_lines ) 
input_word_dict = tokenizer.word_index

output_lines = list()
for line in lines.output:
    output_lines.append( '<START> ' + line + ' <END>' )  

tokenizer = preprocessing.text.Tokenizer()
tokenizer.fit_on_texts( output_lines ) 
output_word_dict = tokenizer.word_index


def str_to_tokens( sentence : str ):
    words = sentence.lower().split()
    tokens_list = list()
    for word in words:
        tokens_list.append( input_word_dict[ word ] ) 
    print(tokens_list)
    return preprocessing.sequence.pad_sequences( [tokens_list] , maxlen=22 , padding='post')
model = models.load_model( 'model.h5' )
enc_model = models.load_model( 'enc_model.h5' ) 
dec_model = models.load_model( 'dec_model.h5' )

@app.get('/')
def index():
    return {"detail":"please make a post request to /predict"}


@app.post('/predict/')
def predict(request: Chatbot):
    inp = request.sentence
    # print(str_to_tokens( inp ))
    var = str_to_tokens( inp )
    states_values = enc_model.predict( var )
    # print(states_values)
    empty_target_seq = np.zeros( ( 1 , 1 ) )
    # result = model.predict(inp,verbose = 0)
    # print(result)
    empty_target_seq[0,0] = output_word_dict['start']
    stop_condition = False
    decoded_translation = ''
    
    while not stop_condition :
        dec_outputs , h , c = dec_model.predict([ empty_target_seq ] + states_values )
        sampled_word_index = np.argmax( dec_outputs[0, -1, :] )
        sampled_word = None
        for word , index in output_word_dict.items() :
            if sampled_word_index == index :
                decoded_translation += ' {}'.format( word )
                sampled_word = word
        if sampled_word == 'end' or len(decoded_translation.split()) > 74:
            stop_condition = True
        empty_target_seq = np.zeros( ( 1 , 1 ) )  
        empty_target_seq[ 0 , 0 ] = sampled_word_index
        states_values = [ h , c ] 
      
    return decoded_translation.replace("end","")
   


if __name__=="__main__":
    uvicorn.run(app,host="127.0.0.1",port=8000)
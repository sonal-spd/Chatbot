import pandas as pd
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from pydantic import BaseModel
from tensorflow.keras import models , preprocessing 
import tensorflow as tf
import numpy as np
import re
from textblob import TextBlob
import requests
import json
from time import time,ctime

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class Chatbot(BaseModel):
    sentence : str

url = ('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1474d6a4526442ca8bf119168553b20a ')

def get_news():
    try:
        response = requests.get(url)
    except:
        return "Can't access the link. Please Check your internet connection"
    news = json.loads(response.text)
    top = news['articles']
    arr = []
    for i in range(5):
        arr.append( top[i]['title']+"-----------")
    return arr

input_word_dict = np.load('input_word_dict.npy',allow_pickle = True).item()
output_word_dict = np.load('output_word_dict.npy',allow_pickle = True).item()
def str_to_tokens( sentence : str ):
    words = sentence.lower().split()
    tokens_list = list()
    for word in words:
        tokens_list.append( input_word_dict[ word ] ) 
    return preprocessing.sequence.pad_sequences( [tokens_list] , maxlen=22 , padding='post')

enc_model = models.load_model( 'enc_model.h5' ) 
dec_model = models.load_model( 'dec_model.h5' )

@app.get('/')
def index():
    return {"detail":"please make a post request to /predict"}


@app.post('/predict/')
def predict(request: Chatbot):
    inp = request.sentence
    exit_commands = ("quit", "pause", "exit", "goodbye", "bye", "stop")
    inp = re.sub(r'[^\w\s]','',inp)
    text = TextBlob(inp).correct()
    if inp in exit_commands:
        return ("Ok, have a great day!")
    if "news" in inp:
        return get_news()
    if "day" in inp:
        t = time()
        return ctime(t)
    var = str_to_tokens( text )
    states_values = enc_model.predict( var )
    empty_target_seq = np.zeros( ( 1 , 1 ) )
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
    uvicorn.run(app,host="127.0.0.1",port=9000)
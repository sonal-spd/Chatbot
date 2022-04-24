import React from 'react'

export default function Working() {
  return (
    <div><div class="w-full mx-auto p-20 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="sm:flex">
      
    <div className='px-4 py-12 '>
              <h2 className='text-5xl pt-8  uppercase text-center'>Working</h2>
              <p className='p-20 text-3xl '>Here is a little description on how the encoder-decoder model used in this application works:
              <ul className='list-disc'>
                  <li>Both encoder and the decoder are typically LSTM models (or sometimes GRU models)</li>
                  <li>Encoder reads the input sequence and summarizes the information in something called as the internal state vectors (in case of LSTM these are called as the hidden state and cell state vectors). We discard the outputs of the encoder and only preserve the internal states</li>
                  <li>Decoder is an LSTM whose initial states are initialized to the final states of the Encoder LSTM. Using these initial states, decoder starts generating the output sequence.</li>
                  <li>The decoder behaves a bit differently during the training and inference procedure. During the training, we use a technique call teacher forcing which helps to train the decoder faster. During inference, the input to the decoder at each time step is the output from the previous time step.</li>
                  <li>The encoder summarizes the input sequence into state vectors (sometimes also called as Thought vectors), which are then fed to the decoder which starts generating the output sequence given the Thought vectors. The decoder is just a language model conditioned on the initial states.</li></ul>
              </p>
              
          </div>
    </div>
  </div></div>
  )
}

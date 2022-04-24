import React from 'react';
import avail from './assets/24-7.png';
import api from './assets/api.png';
import news from './assets/news.png'
import supportImg from './assets/chatbot.jpeg';

export default function About() {
  return (
    <div name='support' className='w-full mt-24 p-20'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>About</h2>
              <p className='py-4 text-3xl text-slate-300'>This is a a generative chatbot designed using keras and other libraries of python on using python 3.8 version and the model used here is seq2seq model, which is nothing but part of deep neural network. Seq2Seq model consists of two RNNs (Recurrent Neural Network), an Encoder and a Decoder. The encoder RNN takes a sequence(sentence) as input and processes one word at each time step. Its purpose is to convert a sequence of symbols/words into a fixed size feature vector that encodes only the important information in the sequence while losing the redundant information.</p>
          </div>

          <div className='grid sm:grid-cols-1 grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <img src = {avail} className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Availability</h3>
                      <p className='text-gray-600 text-xl'>Be able to reply to users in real-time and provide 24 x 7 service.
</p>
                  </div>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <img src = {api} className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>API Support</h3>
                      <p className='text-gray-600 text-xl'>Anyone needing the chatbot in their own website can use this API</p>
                  </div>
                  
              </div>
              <div className='bg-white rounded-xl shadow-2xl'>
                  <div className='p-8'>
                      <img src = {news}className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]' />
                      <h3 className='font-bold text-2xl my-6'>Latest News</h3>
                      <p className='text-gray-600 text-xl'>Able to deliver latest news</p>
                  </div>
                  
              </div>
          </div>
      </div>
  </div>

  //   <div className='w-full mt-24'>
  //     <div className='w-full h-128 bg-gray-900/90 absolute'>
  //       <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
  //     </div>
      
  //     <div className='max-w-[1240px] mx-auto text-white relative'>
  //         <div className='px-4 py-12'>
  //             <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>About</h2>
  //             {/* <h3 className='text-5xl font-bold py-6 text-center'>Finding the right team</h3> */}
  //             <p className='py-4 text-3xl text-slate-300'>This is a a generative chatbot designed using keras and other libraries of python on using python 3.8 version and the model used here is seq2seq model, which is nothing but part of deep neural network. Seq2Seq model consists of two RNNs (Recurrent Neural Network), an Encoder and a Decoder. The encoder RNN takes a sequence(sentence) as input and processes one word at each time step. Its purpose is to convert a sequence of symbols/words into a fixed size feature vector that encodes only the important information in the sequence while losing the redundant information.</p>
  //         </div>
    
  //     </div>
  // </div>

  )
}

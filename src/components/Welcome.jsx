import React from 'react'

const Welcome = () => {
  return (
    
    <div className="grid-flow-rows place-self-center font-sans md:font-serif pl-20">
                    <div strong className='block text-6xl bold'>ChatBot App</div>
                    <div strong className='block text-3xl'>A Natural Language Processing Web App</div>
                    <div className="buttons-wrapper my-5 ">
                        <button type="button" className="rounded-full px-5 py-2.5 mr-2 mb-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 shadow-lg shadow-cyan-500/50">See More</button>
                    </div>
                </div>
            
  )
}
export default Welcome;
import React from 'react'

export default function Navbar() {
  

  return (
    <div className="flex flex-row items-center justify-between p-4 bg-gray-400 mb-8 sm:flex-col">
      <a href="/" className="pl-7 text-2xl font-semibold text-purple-800 lg:ml-10">
        ChatBot
      </a>

          <div className="flex flex-row sm:flex-col justify-around w-2/5 mr-12">
              <a href="#main" className="text-lg font-semibold text-purple-800 transition-all hover:text-orange-500">Home</a>
              <a href="#about" className="text-lg font-semibold text-purple-800 transition-all hover:text-orange-500">About</a>
              <a href="#working" className="text-lg font-semibold text-purple-800 transition-all hover:text-orange-500">How it Works</a>
              <a href="#contact" className="text-lg font-semibold text-purple-800 transition-all hover:text-orange-500">Contact</a>
          </div>

    </div>
    
  )
}
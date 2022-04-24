import React from 'react'
import {AiFillAndroid,AiFillLinkedin} from 'react-icons/ai';
import {DiGithubBadge} from 'react-icons/di'

export default function Footer() {
  return (
    <div id="contact" className="flex flex-row bg-gray-800 flex-wrap items-center justify-around p-10">
    <a href="#main" className="w-1/2 pl-5 mb-2 lg:visible lg:w-auto lg:pl-0 lg:mb-0">
      <AiFillAndroid size ={50}/>
    </a>
    <div className="flex flex-row sm:flex-col justify-around w-2/5 mr-12">
              <a href="https://github.com/sonal-spd" className="text-lg font-semibold text-purple-800 transition-all hover:text-orange-500"><DiGithubBadge size = {50}/></a>
              <a href="https://www.linkedin.com/sonal-varshney-171412208" className="text-lg font-semibold text-purple-800 transition-all hover:text-orange-500"><AiFillLinkedin size = {50}/></a>
              
          </div>

    
    <div className="mt-10 text-lg text-blue-800 lg:mt-0">
        Copyright @ 2022. Made By Sonal Varshney
    </div>
  </div>
  )
}


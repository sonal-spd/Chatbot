import React from "react";
import "./components/style.css";
import "./App.css";

import Chat from "./components/Chat";
import About from "./components/About";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Working from "./components/Working";

export default function App() {
  return (
    <div >
      <Navbar/>
    <div className='main flex flex-wrap items-center justify-evenly'>
    <div className='welcome flex flex-col justify-center place-content-center lg:flex-row lg:m-20 xs:p-50' >
      <Welcome/>
    </div>
    <div className=" mainSection flex flex-col justify-center place-content-center lg:flex-row lg:m-20 xs:p-50">
        
      <Chat />
    </div>
    </div>
    <div className= "flex" id = "about">
      <About/>
    </div>

    <div className="p-15"><Working/></div>
    <div className="flex flex-col justify-center place-content-center lg:flex-row lg:m-20 xs:p-50">
        
      <Footer />
    </div>
    
   
    </div>
    
  );
}

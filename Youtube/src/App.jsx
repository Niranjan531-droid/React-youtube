import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from "./Pages/Home";

function App(){
  return(
    <> 
    <div className='flex flex-col w-full min-h-screen'>
   <Navbar />
   <div className='flex flex-row ' >
   <Sidebar/>
   <div className='w-[calc(100%-200px)] '>
    <Home />
   </div>
   </div>
   </div>
  
   </>
  )
}

export default App;
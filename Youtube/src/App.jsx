import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';

function App(){
  return(
    <div className='bg-black min-h-screen text-white'>
      <Navbar />

      <div className='flex'>
        <Sidebar />

        <main className='flex-1 p-4'>
          <Home />
        </main>

      </div>

    </div>
  )
}

export default App;
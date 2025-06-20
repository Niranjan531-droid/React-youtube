import React from 'react';

const Navbar=()=>{
    return(
        <header className='flex items-center justify-between px-4 py-3 bg-zinc-900 shadow-md sticky top-0 z-50'>
            <div className='flex items-center gap-2'>
             <img src='/youtube-logo.svg' alt='Youtube Logo ' className='h-8 w-8'/>
             <h1 className='text-lg font-bold tracking-wide'>YT Clone</h1>  

            </div>

            <div className='flex-1 mx-4 hidden sm:flex'>
                <input type='text' placeholder='search' className='w-full px-4 py-2 rounded-l-full bg-zinc-800 text-white placeholder-zinc-400 outline-none' />

                <button className='px-4 py-2 bg-zinc-700 rounded-r-full hover:bg-zinc-600'>
                   🔍
                </button>
            </div>
            <div className='flex items-center gap-3'>
            <img src= "./my-channel.jpeg"  className='w-8 h-8 rounded-full'/>
            </div>
            </header>
        
        
    )
}
export default Navbar;
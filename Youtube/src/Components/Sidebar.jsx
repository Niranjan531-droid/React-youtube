import React from 'react';


const menuItems =[
    {label:"Home",icon:"/home.svg"},
    {label:"Trending",icon:"/explore.svg"},
    {label:"Subscriptions",icon:"/subscriptions.svg"},
    {label:"Originals",icon:"/orginals.svg"},
    {label:"Youtube Music",icon:"/youtube-music.svg"},
    {label:"Library", icon:"/Library.svg"}
];

const Sidebar=()=>{
    return(
        <aside className='hidden md:flex flex-col w-60 bg-zinc-900 p-4 min-h-screen border-r border-zinc-800' >
            {menuItems.map((item,index)=>(
                <div key={index} className='flex items-center gap-4 px-5 py-3 hover:bg-gray-100 cursor-pointer transition rounded-lg'>
                    <img src={item.icon} alt={item.label} className='w-6 h-6 object-contain' />
                    <span className='text-sm font-medium'>{item.label}</span>
                </div>
            ))}

        </aside>
    );
};

export default Sidebar;
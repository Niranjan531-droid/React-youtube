import React from 'react';

const VideoCard = ({thumbnail,title,channel,views,uploaded,duration})=>{
    return(
        <div className='w-full max-w-sm sm:max-w-xs'>
        <div className='relative'>
         <img src={thumbnail} alt={title} className='w-full h-48 sm:h object-cover rounded-xl' />
         <span className='absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded'>
         {duration}
         </span>
        </div>
        <div className='flex gap-3 mt-3'>
         <img src=""  alt={channel} className='w-9 h-9 rounded-full' />
       
        <div>
            <h3 className='text-sm font-semibold leading-tight line-clamp-2'>
            {title}
            </h3>
            <p className='text-xs text-gray-600 mt-1'>{channel}</p>
            <p className='text-xs text-gray-500'>{views} {uploaded}</p>
        </div>
        </div>
         </div>
    )
}
export default VideoCard;
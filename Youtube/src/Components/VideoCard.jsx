import React from 'react';

function VideoCard({ thumbnail, channelIcon, title, channelName, views, time }) {
  return (
    <div className="mt-[80px] ml-[200px] w-full sm:w-[300px] md:w-[320px] p-2 cursor-pointer">
      <img src={thumbnail} alt="video thumbnail" className="w-full h-[180px] object-cover rounded-xl"  />
      <div className="flex mt-3">
        <img src={channelIcon} alt="channel icon" className="h-10 w-10 rounded-full object-cover mr-3" />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{channelName}</p>
          <p className="text-sm text-gray-500">{views} • {time}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;

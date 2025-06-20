import React from "react";
import VideoCard from "../Components/VideoCard";

const videoData = [
  {
    thumbnail: "/thumbnail-1.jpg",
    channelIcon: "/channel-icon-2.jpg",
    title:"Panthers Rage | Marvels Avengers Assemble S3 E17 | Full Episode  ",
    channelName: "Marvel HQ",
    views: "1M views",
    time: "5 months ago",
  },
  {
    thumbnail: "/thumbnail-2.jpg",
    channelIcon: "/channel-icon-1.jpg",
    title: "Lightning McQueen’s Toughest Race Track Competitions | Pixar Cars",
    channelName: "Disney Jr",
    views: "12M views",
    time: "1 year ago",
  },
  {
    thumbnail: "/thumbnail-3.jpg",
    channelIcon: "/channel-icon-3.jpg",
    title: "The Coolest Video 4K 120 FPS HDR Dolby Vision - 4K Video ULTRA HD",
    channelName: "4K Video ULTRA",
    views: "22K views",
    time: "6 hours ago",
  },
  {
    thumbnail: "thumbnail-4.jpg",
    channelIcon: "/channel-icon-4.jpg",
    title: "Introducing iPhone 16 | Apple",
    channelName: "Apple",
    views: "20M views",
    time: "9 months ago",
  },
  {
    thumbnail: "thumbnail-5.jpg",
    channelIcon: "/channel-icon-5.jpg",
    title:"Introducing Galaxy S25 Ultra | Samsung",
    channelName: "Samsung",
    views: "46M views",
    time: "4 months ago",
  },
  {
    thumbnail: "thumbnail-7.jpg",
    channelIcon: "channel-icon-6.jpg",
    title: "How Smart Will AI Be in 2050 ?",
    channelName: "AI Uncovered",
    views: "211K views",
    time: "1 year ago",
  },
  {
    thumbnail: "thumbnail-6.jpg",
    channelIcon: "/channel-icon-7.jpg",
    title: "4.5 Billion Years In 20 Minutes",
    channelName: "ReYOUniverse",
    views: "984K views",
    time: "8 months ago",
  },
  {
    thumbnail: "thumbnail-8.jpg.jpg",
    channelIcon: "/channel-icon-8.jpg",
    title: "Grand Theft Auto VI Trailer 2",
    channelName: "Rockstar Games",
    views: "121M views",
    time: "1 month ago",
  },
  {
    thumbnail: "/thumbnail-9.jpg",
    channelIcon: "/channel-icon-9.jpg",
    title: "Superman | Sneak Peek",
    channelName: "DC",
    views: "11M views",
    time: "2 months ago",
  },
  {
    thumbnail: "/thumbnail-10.jpg",
    channelIcon: "/channel-icon-10.jpg",
    title: "Sachin Tendulkar",
    channelName: "ICC",
    views: "4.4M views",
    time: "11 years ago",
  },
  {
    thumbnail: "/thumbnail-11.jpg",
    channelIcon: "channel-icon-11.jpg",
    title: "Tom and Jerry",
    channelName: "Cartoon Network",
    views: "523K views",
    time: "3 week ago",
  },
  {
    thumbnail: "thumbnail-12.jpg",
    channelIcon: "/channel-icon-12.jpg",
    title: "Messi magic sets up win | Argentina v Mexico | FIFA World Cup Qatar 2022",
    channelName: "FIFA",
    views: "23.3M views",
    time: "2 years ago",
  },
 
];

function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-2 w-[1500px]">
      {videoData.map((video, index) => (
        <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}

export default Home;

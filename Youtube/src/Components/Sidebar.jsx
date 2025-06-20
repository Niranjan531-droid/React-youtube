
function Sidebar(){
    return(<div className="flex flex-col justify-center align-middle  w-[200px] h-[750px] sticky cursor-pointer">
   <div className="flex h-[120px] hover:bg-gray-300 pt-[30px] ">
    <img className="pl-[20px] h-[40px] " src="home.svg" /><h3 className="flex  text-center pl-[20px] pt-[11px] font-bold" >Home</h3>
   </div>
   <div className="flex h-[120px] hover:bg-gray-300 pt-[30px]">
    <img className="pl-[20px] h-[40px]" src="explore.svg" /><h3 className="flex  text-center pl-[20px] pt-[11px] font-bold" >Explore</h3>
   </div>
   <div className="flex h-[120px] hover:bg-gray-300 pt-[30px] ">
    <img className="pl-[20px] h-[40px]" src="subscriptions.svg"/><h3 className="flex  text-center pl-[20px] pt-[11px] font-bold" >Subscriptions</h3>
   </div>
   <div className="flex h-[120px] hover:bg-gray-300 pt-[30px]">
    <img className="pl-[20px] h-[40px]" src="originals.svg" /><h3 className="flex  text-center pl-[20px] pt-[11px] font-bold" >Originals</h3>
   </div>
   <div className="flex h-[120px] hover:bg-gray-300 pt-[30px]">
    <img className="pl-[20px] h-[40px]" src="youtube-music.svg" /><h3 className="flex  text-center pl-[20px] pt-[11px] font-bold" >Youtube music</h3>
   </div>
   <div className="flex h-[120px] hover:bg-gray-300 pt-[30px]">
    <img className="pl-[20px] h-[40px]" src="library.svg"/><h3 className="flex  text-center pl-[20px] pt-[11px] font-bold" >Library</h3>
   </div>
    </div>)
}
export default Sidebar
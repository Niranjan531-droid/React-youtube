

function Navbar(){

return(<><header className="flex flex-row items-center justify-between h-[80px] w-full  bg-gray-50 fixed z-50">
    <div className="flex items-center w-[120px] sm:w-[200px] md:w-[300px] lg:w-[350px]  "> 
    
        <img className="h-[60px] w-[40px] mx-[10px]" src="hamburger-menu.svg" />
        <img className="h-[60px] w-[160px] ml-[15px]" src="youtube-logo.svg" />
    </div>
    <div className="flex  w-[900px] h-[80px] justify-center align-middle items-center ">
     <input type="search " placeholder="Search" className="h-[50px]  rounded-l-2xl pl-[10px]  w-[850px] border-2 border-gray-300 " />
     <button><img className="ml-[-1] w-[70px] h-[50px] border-2 border-gray-200 rounded-r-2xl" src="search.svg" /></button>
     <button><img className="w-[70px] h-[50px] rounded-[25px] border-2 border-gray-200 " src="voice-search-icon.svg"/></button>
    </div>
    <div className="flex w-[270px]  h-[80px]">
    <img className="h-[70px] w-[40px] mx-[10px] " src="upload.svg"/>
    <img className="h-[70px] w-[40px] mx-[10px]" src="youtube-apps.svg"/>
    <img className="h-[70px] w-[40px] mx-[10px]"  src ="notifications.svg"/>
    <img className="mt-[7px] h-[60px] w-[60px] object-fill rounded-[40px] mx-[10px]" src="cat.jpg"/>
    </div>
  
</header>
  </>)
}
export default Navbar;
import React from "react";
import {MenuIcon, XIcon} from "@heroicons/react/outline"
const Navbar = () =>{
    return(
    <div className = 'w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg'>
        <div className = 'px-2 flex justify-between items-center w-full h-full'>
            <div className = 'flex items-center'>
                <h1 className = 'text-3x1 font-bold mr-4 sm:text-4xl'>BRANDINGo.</h1>
            </div>
        </div>
        <MenuIcon className='w-5'/>


    </div>
    );
};

export default Navbar;
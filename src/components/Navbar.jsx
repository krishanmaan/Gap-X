// import React from "react";
import { useState } from "react";
import logo from '../../public/assets/img/logo/lo.png'



export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>


            <nav className=" bg-transparent backdrop-blur-sm  fixed w-full z-20  top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-24 w-44   " alt="GAPX Logo" />

                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-white bg-transparent border hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center  dark:focus:ring-blue-800">Get started</button>
                        <button onClick={() => setToggleMenu(!toggleMenu)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>

                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium font-Grandstander border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white hover:text-[#9E9CA2] rounded md:bg-transparent  md:p-0 " aria-current="page">HOME</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3  rounded hover:text-[#9E9CA2] md:hover:bg-transparent  md:p-0  dark:text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">ABOUT US</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3  rounded hover:text-[#9E9CA2]  md:hover:bg-transparent  md:p-0 md:dark:hover:text-blue text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">TOKENOMICS</a>
                            </li>
                            <li>
                                <a href="#roadMap" className="block py-2 px-3  rounded hover:text-[#9E9CA2]  md:hover:bg-transparent  md:p-0  text-white dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700">ROADMAP</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3  rounded hover:text-[#9E9CA2]  md:hover:bg-transparent  md:p-0  text-white   md:dark:hover:bg-transparent dark:border-gray-700">REFER & ERAN</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className={`fixed z-40 w-full bg-[#020519] text-white text-2xl font-Grandstander font-bold overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-screen"
                        }`}
                >
                    <div className="px-8">
                        <div className="flex flex-col gap-8 font-bold tracking-widest text-center">
                            <a href="#" className="hover:text-primary-700 ">HOME</a>
                            <a href="#" className="hover:text-primary-700 ">ABOUT US</a>
                            <a href="#" className="hover:text-primary-700 ">TOKENOMICS</a>
                            <a href="#" className="hover:text-primary-700 ">ROADMAP</a>
                            <a href="#" className="hover:text-primary-700 ">REFER & ERAN</a>
                            
                            
                        </div>
                    </div>
                </div>
            </nav>
           
        </>
    );
}




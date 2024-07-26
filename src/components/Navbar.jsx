// import React from "react";
import { useState } from "react";
import logo from '../../public/assets/img/logo/lo.png'



export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <nav className="bg-transparent backdrop-blur-sm fixed w-full z-20 top-0 left-0 border-gray-200  border-b lg:border-none lg:pt-10 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
          <a href="#" className="">
            <img src={logo} className="w-28" alt="GAPX Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse pr-4">
            <a
              className="links__btn hidden lg:block  text-white text-lg font-normal leading-[140%] transition duration-300 px-5 py-3 border-2 border-white rounded-full"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Airdrop
            </a>
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              type="button"
              className="inline-flex  items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2  "
              aria-controls="navbar-sticky"
              aria-expanded={toggleMenu}
            >
              {toggleMenu ? (
                <svg
                  className="close"
                  height="40"
                  width="40"
                  fill="none"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.3335 8.33333L20.0002 20L31.6668 8.33333"
                    stroke="#F8F7FF"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                  <path
                    d="M8.3335 31.6667L20.0002 20L31.6668 31.6667"
                    stroke="#F8F7FF"
                    strokeLinecap="round"
                    strokeWidth="4"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-53.24 -51.863 1024 1024" fill="#fff" > 
                  <path d="M81.235 228.081H849.454c15.264 0 28-12.737 28-28s-12.736-28-28-28H81.234c-15.263 0-28 12.737-28 28s12.738 28 28.001 28zm0 261.5H649.456c15.264 0 28-12.736 28-28 0-15.263-12.736-28-28-28H81.235c-15.263 0-28 12.737-28 28s12.737 28 28 28zm0 261.5h368.219c15.264 0 28-12.736 28-28s-12.736-28-28-28H81.235c-15.263 0-28 12.736-28 28s12.737 28 28 28z" />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${toggleMenu ? "block" : "hidden"}`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col lg:gap-4 p-4 text-lg md:p-0 mt-4 font-medium font-Grandstander border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {[
                { name: "HOME", link: "#" },
                { name: "ABOUT US", link: "#aboutus" },
                { name: "TOKENOMICS", link: "#" },
                { name: "ROADMAP", link: "#roadMap" },
                { name: "REFER & EARN", link: "#" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="block py-2 px-3  hover:text-xl text-white text-base hover:text-[#0EE9A0] rounded md:bg-transparent md:p-0"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <a
                className="links__btn text-white text-lg font-normal lg:hidden leading-[140%] transition duration-300 px-5 py-3 border-2 border-white rounded-full font-Grandstander"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Airdrop
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}




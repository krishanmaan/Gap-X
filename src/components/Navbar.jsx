import React, { useState } from "react";
import logo from '../../public/assets/img/logo/lo.png';
import { motion } from "framer-motion";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavItemClick = () => {
    setToggleMenu(false);
  };

  return (
    <>
      <nav
        className={`bg-[#000012] backdrop-blur-sm w-full fixed z-20 top-0 left-0 border-gray-200 border-b lg:border-none transition-transform duration-300`}
      >
        <div className="navlogo max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <a href="#" className="">
            <img src={logo} className="w-28" alt="GAPX Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse pr-4">
            <motion.a
              whileHover={{ scale: 0.9 }}
              className="links__btn hidden lg:block text-black bg-[#0EE89F] text-lg font-normal leading-[140%] transition duration-300 px-5 py-3 border-2 border-black rounded-full"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Airdrop
            </motion.a>
            <button
              onClick={() => setToggleMenu(!toggleMenu)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2"
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
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H11"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2" />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${toggleMenu ? "block" : "hidden"}`}
            id="navbar-sticky"
          >
            <ul
              className="flex flex-col lg:gap-4 p-4 text-lg md:p-0 mt-2 font-medium font-Grandstander border-2 border-b-0 border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
            >
              {[
                { name: "HOME", link: "#" },
                { name: "ABOUT US", link: "#aboutus" },
                { name: "TOKENOMICS", link: "#TOKENOMICS" },
                { name: "ROADMAP", link: "#roadMap" },
                { name: "contact us", link: "#contact" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="block py-2 px-3 hover:text-xl md:mt-6 text-white text-base hover:text-[#0EE9A0] rounded md:bg-transparent md:p-0"
                    onClick={handleNavItemClick}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <motion.a
                whileHover={{ scale: 0.9 }}
                className="links__btn text-black bg-[#0EE9A0] text-lg font-normal lg:hidden leading-[140%] transition duration-300 px-5 py-3 border-2 border-black rounded-full font-Grandstander"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavItemClick}
              >
                Join Airdrop
              </motion.a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

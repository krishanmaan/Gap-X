import React from 'react'
import logo from '../../public/assets/img/logo/lo.png'

import { FaFacebook ,FaMedium ,FaQuora  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";



const Footer = () => {
    return (


        

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
              <img src={logo} className="h-24 w-44   " alt="GAPX Logo" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">USEFULL LINKS</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">HOME</a>
                      </li>
                      <li>
                          <a href="#aboutus" className="hover:underline">About Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">SOLUTIONS</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="" className="hover:underline ">Tokenomics</a>
                      </li>
                      <li>
                          <a href="#roadMap" className="hover:underline">RoadMap</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">USEFULL LINKS</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Refer & Earn</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Gapx Coin</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="https://www.facebook.com/profile.php?id=61562116088413&sk=about" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaFacebook />
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="https://x.com/GapXbit" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                 <FaSquareXTwitter/>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="https://medium.com/@gapxbit" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                 <FaMedium/>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="https://www.quora.com/profile/GAP-X-BIT" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <FaQuora/>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="https://coinmarketcap.com/community/profile/Gapx/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                 <MdGroups2/>
                  <span className="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>


    )
}

export default Footer
import React from 'react'
import logo from '../../public/assets/img/logo/lo.png'

import { FaFacebook, FaMedium, FaQuora } from "react-icons/fa";
import { FaSquareXTwitter, FaTwitter } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";




const Footer = () => {
    return (
        <div className="  mx-auto px-4 max-w-screen-xl font-Grandstander p-6 text-white ">
            <div className="footer-section mt-12  border-b border-blue-900 ">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/3 sm:w-2/3 px-4">
                        <div className="footer-widget">
                            <div className="footer-logo mb-5">
                                <a href="#">
                                    <img
                                        alt="cryptocoin image"
                                        src={logo}
                                        className=""
                                    />
                                </a>
                            </div>
                            <p className="text-[#bfdbff] text-sm font-light leading-7">
                                A new smart blockchain-based marketplace for trading digital
                                goods & assets according.
                            </p>
                            <div className="mt-5">
                                <ul className="flex ">
                                    <li className="flex sm:justify-center sm:mt-0 rounded-full items-center justify-center cursor-pointer">
                                        <a href="https://www.facebook.com/profile.php?id=61562116088413&sk=about" className="text-gray-500 hover:text-white " >
                                            <FaFacebook className='text-3xl' />

                                        </a>
                                    </li>
                                    <li className="flex sm:justify-center sm:mt-0 rounded-full items-center justify-center cursor-pointer">
                                        <a href="https://x.com/GapXbit" className="text-gray-500 hover:text-white" >
                                            <FaSquareXTwitter className='text-3xl' />
                                        </a>
                                    </li>
                                    <li className="flex sm:justify-center sm:mt-0 rounded-full items-center justify-center cursor-pointer">
                                        <a href="https://medium.com/@gapxbit" className="text-gray-500 hover:text-white " >
                                            <FaMedium className='text-3xl' />
                                        </a>
                                    </li>
                                    <li className="flex sm:justify-center sm:mt-0 rounded-full items-center justify-center cursor-pointer">
                                        <a href="https://www.quora.com/profile/GAP-X-BIT" className="text-gray-500 hover:text-white " >
                                            <FaQuora className='text-3xl' />
                                        </a>
                                    </li>
                                    <li className="flex sm:justify-center sm:mt-0 rounded-full items-center justify-center cursor-pointer">
                                        <a href="https://coinmarketcap.com/community/profile/Gapx/" className="text-gray-500 hover:text-white " >
                                            <MdGroups2 className='text-3xl' />
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/6 sm:w-1/3 px-4">
                        <div className="">
                            <h6 className="text-white text-sm font-semibold">USEFUL LINKS</h6>
                            <ul>
                                <li className="">
                                    <a href="#" className="text-[#bfdbff] ">Home</a>
                                </li>
                                <li className="">
                                    <a href="#aboutus" className="text-[#bfdbff] text-sm">ABOUT US</a>
                                </li>
                                <li className="">
                                    <a href="" className="text-[#bfdbff] ">REFER & EARN</a>
                                </li>
                                <li className="">
                                    <a href="#" className="text-[#bfdbff] ">CONTACT</a>
                                </li>
                            </ul>

                        </div>
                    </div>


                    <div className="w-full md:w-1/6 sm:w-1/3 px-4">
                        <div className="footer-widget">
                            <h6 className="text-white text-sm font-semibold mb-7">SOLUTIONS</h6>
                            <ul>
                                <li className="py-2">
                                    <a href="#" className="text-[#bfdbff] text-sm">TOKENOMICS</a>
                                </li>
                                <li className="py-2">
                                    <a href="#roadMap" className="text-[#bfdbff] text-sm">ROADMAP</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 sm:w-2/3 px-4">
                        <div className="footer-widget">
                            <h6 className="text-white text-sm font-semibold mb-7">Newsletter</h6>
                            <p className="text-[#bfdbff] text-sm font-light leading-7">
                                Sign up to get our all latest news and
                            </p>
                            <form>
                                <input
                                    className="form-control my-5 p-3 w-full rounded-full bg-[#072457] text-white"
                                    type="email"
                                    placeholder="Email"
                                />
                                {/* <a
                                    className="links__btn   text-white text-lg font-normal leading-[140%] transition duration-300 px-5 py-3 border-2 border-white rounded-full"
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Join Airdrop
                                </a> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
import React from 'react';
import logo from '../../public/assets/img/logo/lo.png';
import robot from '../../public/assets/img/logo/fffd.png';
import { FaFacebook, FaMedium, FaQuora } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";

const Footer = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 pb-2 pt-16 text-white font-Grandstander">
            <div className="footer-section border-b border-[#0EE9A0]">
                <div className="flex flex-wrap -mx-4 text-center md:text-left">
                    <div className="w-full sm:w-2/3 md:w-1/3 px-4">
                        <div className="footer-widget">
                            <div className="footer-logo hidden md:block">
                                <a href="#">
                                    <img
                                        src={logo}
                                        alt="Cryptocoin Logo"
                                        className="w-40 mx-auto md:mx-0 "
                                    />
                                </a>
                            </div>
                            <p className="text-sm text-[#FFF] font-sans">
                                A new smart blockchain-based marketplace for trading digital
                                goods & assets according.
                            </p>
                            <div className="mt-5 md:pb-10">
                                <ul className="flex justify-center md:justify-start socil">
                                    <li className="flex items-center justify-center rounded-full cursor-pointer">
                                        <a href="https://www.facebook.com/profile.php?id=61562116088413" className="text-gray-500 hover:text-white">
                                            <FaFacebook className='text-3xl' />
                                        </a>
                                    </li>
                                    <li className="flex items-center justify-center rounded-full cursor-pointer">
                                        <a href="https://x.com/GapXbit" className="text-gray-500 hover:text-white">
                                            <FaSquareXTwitter className='text-3xl' />
                                        </a>
                                    </li>
                                    <li className="flex items-center justify-center rounded-full cursor-pointer">
                                        <a href="https://medium.com/@gapxbit" className="text-gray-500 hover:text-white">
                                            <FaMedium className='text-3xl' />
                                        </a>
                                    </li>
                                    <li className="flex items-center justify-center rounded-full cursor-pointer">
                                        <a href="https://www.quora.com/profile/GAP-X-BIT" className="text-gray-500 hover:text-white">
                                            <FaQuora className='text-3xl' />
                                        </a>
                                    </li>
                                    <li className="flex items-center justify-center rounded-full cursor-pointer">
                                        <a href="https://coinmarketcap.com/community/profile/Gapx/" className="text-gray-500 hover:text-white">
                                            <MdGroups2 className='text-3xl' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/3 md:w-1/6 px-4 md:mr-20">
                        <div>
                            <h6 className="text-xl text-[#0EE9A0]">USEFUL LINKS</h6>
                            <ul className='footrul text-sm font-sans'>
                                <li><a href="#" className="text-[#FFF]">Home</a></li>
                                <li><a href="#aboutus" className="text-[#FFF]">ABOUT US</a></li>
                                <li><a href="#TOKENOMICS" className="text-[#FFF]">TOKENOMICS</a></li>
                                <li><a href="#roadMap" className="text-[#FFF]">roadmap</a></li>
                                <li><a href="#contact" className="text-[#FFF]">CONTACT</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/3 md:w-1/3 px-4 pt-6 md:pt-0">
                        <div className="footer-widget">
                            <h6 className="text-xl text-[#0EE9A0] mb-1">NEWSLETTER</h6>
                            <p className="text-sm text-[#FFF] font-light font-sans leading-7">
                                Sign up to get our all latest news and
                            </p>
                            <img src={robot} alt="Robot" className="md:hidden w-40 mx-auto md:mx-0" />
                            <form>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="form-control my-5 w-full p-3 rounded-full bg-[#fff] text-white"
                                />
                            </form>
                        </div>
                    </div>
                </div>
                <h1 className='text-xl text-[#0EE9A0] mb-1 text-center md:hidden'>Thank You❤️</h1>
            </div>
            <p className='text-center text-xs font-sans mt-4'>Copyright ©️ Gap-X Coin 2024. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;

import React from 'react';
import bannerShape from '../../public/assets/img/banner/banner_shape01.png';
import { motion } from 'framer-motion';

export default function ContactForm() {
    return (
        <>
            <h2 className="text-center text-white font-bold font-Grandstander pt-10 text-5xl lg:text-7xl">
                Contact <span className="text-[#0EE9A0]">Form</span>
            </h2>
            <div className="max-w-screen-xl mx-auto md:flex items-center justify-center align-middle text-white font-Lotata pt-0 pb-0">
                <motion.img
                    src={bannerShape}
                    alt="Banner"
                    className="w-[800px]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
                <div className="w-full p-6 pt-0 rounded-lg shadow-md md:p-6 lg:pr-24">
                    <form>
                        <div className="mb-4">
                            <label className="block">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full mt-2 px-4 py-2 border rounded-full bg-transparent focus:outline-none focus:ring-1 focus:ring-[#0EE89F]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block">Email</label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full mt-2 px-4 py-2 border rounded-full bg-transparent focus:outline-none focus:ring-1 focus:ring-[#0EE89F]"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block">Message</label>
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full mt-2 px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-[#0EE89F]"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="text-sm text-black bg-[#0EE89F] border-2 border-black rounded-full px-5 py-3 font-Grandstander transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

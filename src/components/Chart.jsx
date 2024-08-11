import React from "react";

import tokenallocation from '../../public/assets/img/images/tokenallocation.png'
import tokenallocationtitle from '../../public/assets/img/images/tokenallocationtitle.png'
import { motion } from "framer-motion";

export default function Component() {
    return (
        <>



            <div className=" flex justify-center items-center max-w-screen-xl mx-auto  ">
                <div className="">
                    <h2 className="lg:text-7xl text-5xl font-bold  font-Grandstander text-center text-white ">Total <samp className="font-Grandstander text-[#0EE9A0]">Supply</samp> & <samp className="font-Grandstander text-[#0EE9A0]">Allocation</samp> </h2>

                    <div className="lg:flex md:flex mt-4">
                        <div>
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                src={tokenallocation} alt="" />
                        </div>
                        <div>
                            <img src={tokenallocationtitle} alt="" className="mt-4 p-4 md:pr-10 pb-4" />
                        </div>
                    </div>
                    <div id='contact'></div>
                </div>

            </div>


        </>
    );
}

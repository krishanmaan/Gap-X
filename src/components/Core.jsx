import React from 'react';
import Launchpad from '../../public/assets/img/icons/Launchpad.png'
import Presale from '../../public/assets/img/icons/Presale.png'
import Reserve from '../../public/assets/img/icons/Reserve.png'
import Team from '../../public/assets/img/icons/team.png'
import Development from '../../public/assets/img/icons/Development.png'
import { motion } from "framer-motion";

const Core = () => {

    const variant = {
        visible: { scale: 1 },
        hidden: { scale: 0 },
    };

    return (
        <div className="flex items-center max-w-screen-xl mx-auto justify-center min-h-screen text-white pt-12">
            <div>
                <h2 className=" lg:text-7xl text-5xl font-bold mb-10 font-Grandstander text-center">
                    GAP-X <samp className="font-Grandstander text-[#0EE9A0]">Ecosystem</samp>
                </h2>
                <div className="mx-auto px-2 grid gap-4 lg:grid-cols-3">
                    <motion.div
                        variants={variant}
                        initial="hidden"
                        whileInView="visible"
                        className="bg-[#181927] pt-6 pl-6 pb-4 rounded-lg shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="text-blue-500 text-2xl mr-4 w-20">
                                <img src={Launchpad} alt="" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold font-Grandstander text-[#0EE9A0] pb-1">Launchpad</h3>
                        <p className="font-Lotata">Earn rewards by staking GAPX Tokens, contributing to network security and liquidity provision.</p>
                    </motion.div>

                    <motion.div
                        variants={variant}
                        initial="hidden"
                        whileInView="visible" className="bg-[#181927] pt-6 pl-6 pb-4 rounded-lg shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="text-blue-500 text-2xl mr-4 w-20">
                                <img src={Presale} alt="" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold font-Grandstander text-[#0EE9A0] pb-1">
                            Presale</h3>
                        <p className="font-Lotata">Invite friends to join ExBit Global and earn rewards through our referral program, expanding your earnings with each new member.</p>
                    </motion.div>
                    <motion.div
                        variants={variant}
                        initial="hidden"
                        whileInView="visible" className="bg-[#181927] pt-6 pl-6 pb-4 rounded-lg shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="text-blue-500 text-2xl mr-4 w-20">
                                <img src={Development} alt="" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold font-Grandstander text-[#0EE9A0] pb-1">
                            Development</h3>
                        <p className="font-Lotata">Earn rewards by staking GAPX Tokens, contributing to network security and liquidity provision.</p>
                    </motion.div>

                    <motion.div
                        variants={variant}
                        initial="hidden"
                        whileInView="visible" className="bg-[#181927] pt-6 pl-6 pb-4 rounded-lg shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="text-blue-500 text-2xl mr-4 w-20">
                                <img src={Team} alt="" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold font-Grandstander text-[#0EE9A0] pb-1">Team</h3>
                        <p className="font-Lotata">Engage in regular promotions and giveaways to win GAPX Tokens and other exciting rewards, recognizing your loyalty and active participation.</p>
                    </motion.div>

                    <motion.div
                        variants={variant}
                        initial="hidden"
                        whileInView="visible" className="bg-[#181927] pt-6 pl-6 pb-4 rounded-lg shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="text-blue-500 text-2xl mr-4 w-20">
                                <img src={Launchpad} alt="" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold font-Grandstander text-[#0EE9A0] pb-1">Staking Partners Bonus</h3>
                        <p className="font-Lotata">Reserved for incentivizing staking activities, encouraging active participation in the ecosystem and promoting token liquidity.</p>
                    </motion.div>
                    <motion.div
                        variants={variant}
                        initial="hidden"
                        whileInView="visible" className="bg-[#181927] pt-6 pl-6 pb-4 rounded-lg shadow-lg">
                        <div className="flex items-center mb-6">
                            <div className="text-blue-500 text-2xl mr-4 w-20">
                                <img src={Reserve} alt="" />
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold font-Grandstander text-[#0EE9A0] pb-1">
                            Reserve</h3>
                        <p className="font-Lotata">Held in reserve to support liquidity management, strategic partnerships, and unforeseen operational needs, ensuring stability and sustainability.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Core
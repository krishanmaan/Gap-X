// import React, { useEffect } from 'react';
// import ScrollReveal from 'scrollreveal';
// import './Timeline.css'; // CSS file ka path adjust kar lena
import './Timeline.scss'; // CSS file ka path adjust kar lena
import { motion } from 'framer-motion';
import { slideIn } from "../utils/motion";
import { useState, useEffect } from 'react';

const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};


const Timeline = () => {
    // useEffect(() => {
    //     const sr = ScrollReveal();

    //     const revealOptions = {
    //         origin: 'left',
    //         distance: '-300px',
    //         easing: 'ease-in-out',
    //         duration: 400,
    //     };

    //     const handleResize = () => {
    //         if (window.innerWidth < 768) {
    //             document.querySelectorAll('.timeline-content.js--fadeInLeft').forEach(el => {
    //                 el.classList.remove('js--fadeInLeft');
    //                 el.classList.add('js--fadeInRight');
    //             });

    //             sr.reveal('.js--fadeInRight', {
    //                 ...revealOptions,
    //                 origin: 'right',
    //             });
    //         } else {
    //             sr.reveal('.js--fadeInLeft', revealOptions);
    //             sr.reveal('.js--fadeInRight', {
    //                 ...revealOptions,
    //                 origin: 'right',
    //             });
    //         }
    //     };

    //     handleResize(); // Initial call
    //     window.addEventListener('resize', handleResize);

    //     // Cleanup event listener on component unmount
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);



    return (

        <>
           
            <h2 className="lg:text-7xl text-5xl font-bold  font-Grandstander text-center text-white mt-10 pb-6">Road Map of <samp className="font-Grandstander text-[#0EE9A0]">Platform</samp> </h2>

            <section className="timeline  items-center flex justify-center  md:pr-2 md:pl-2 md:px-0 ">

                <div className="container ">

                    {/* ITEM 1 */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInLeft}
                        className="timeline-item mb-4 relative ">
                        <div className="timeline-img w-8 h-8 bg-primary "></div>
                        <div
                            className="timeline-content   p-8 rounded shadow-custom js--fadeInLeft relative   mr-0">
                            <h2 className="text-2xl font-bold uppercase tracking-wide text-[#0EE9A0] font-Grandstander">Launch and Foundation</h2>
                            <h5 className=" mb-4 ">2024</h5>
                            <p className='font-Lotata text-sm pb-2'>Gapx Launch Event, o	Partnership Announcements, Community Building, Gapxbit Exchange Launch , Educational Campaigns</p>
                        </div>
                    </motion.div>

                    {/* ITEM 2 */}

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInRight}
                        className="timeline-item mb-4 relative">
                        <div className="timeline-img w-8 h-8 bg-primary "></div>
                        <div className="timeline-content  p-8 rounded shadow-custom js--fadeInRight relative   mr-0">
                            <h2 className="text-2xl font-bold uppercase tracking-wide  text-[#0EE9A0] font-Grandstander">Expansion and Integration</h2>
                            <h5 className=" mb-4 ">2025</h5>
                            <p className='font-Lotata text-sm pb-2'>Platform Integration, Marketing Initiatives, Gapx Wallet Enhancement, Strategic Partnerships</p>
                        </div>
                    </motion.div>

                    {/* ITEM 3 */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInLeft}
                        className="timeline-item mb-4 relative">
                        <div className="timeline-img w-8 h-8 bg-primary "></div>
                        <div className="timeline-content  p-8 rounded shadow-custom js--fadeInLeft relative   mr-0">
                            <h2 className="text-2xl font-bold uppercase tracking-wide text-[#0EE9A0] font-Grandstander">Adoption and Global Reach </h2>
                            <h5 className=" mb-4 ">2026</h5>
                            <p className='font-Lotata text-sm pb-2'>Global Expansion, Enterprise Integration & User Feedback Loop</p>
                        </div>
                    </motion.div>

                    {/* ITEM 4 */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInRight}
                        className="timeline-item mb-4 relative">
                        <div className="timeline-img w-8 h-8 bg-primary "></div>
                        <div className="timeline-content  p-8 rounded shadow-custom js--fadeInRight relative   mr-0">

                            <h2 className="text-2xl font-bold uppercase tracking-wide  text-[#0EE9A0] font-Grandstander">Innovation and Beyond</h2>
                            <h5 className=" mb-4 ">2027 AND BEYOND </h5>
                            <p className='font-Lotata text-sm pb-2'>Innovative Marketing, Thought Leadership,
                                Sustainability Initiatives
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Timeline;

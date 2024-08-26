import robot from '../../public/assets/img/banner/banner1.png'
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <>
            <section id='home' className="xl:flex md:flex items-center justify-between w-full max-w-screen-xl mx-auto  pb-10 lg:pb-0 relative ">
                <div className="mx-auto  lg:py-16 lg:px-12">
                    <h1 className=" m-4 md:mr-0 mt-24 md:mt-0 text-4xl md:text-7xl lg:text-7xl font-medium font-Grandstander tracking-tight leading-none text-[#fff] justify-center">
                        Shaping Your Secure Digital Future with <samp className='font-Grandstander text-[#0EE9A0] text-4xl lg:text-7xl'>Gap-X</samp>
                    </h1>
                    <p className=" ml-4 text-white text-lg md:text-2xl lg:text-3xl">
                        Smart Blockchain Marketplace For Digital Goods Trading.
                    </p>
                </div>
                <motion.div
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.9 }} 
                    className="mx-auto md:h-1/3 md:w-auto md:mt-20 lg:mt-0">
                    <img src={robot} alt="Robot" className="hidden lg:block sm:block p-14 pb-0 pr-6 mt-6" />
                    <div id="aboutus"></div>
                </motion.div>
                <div className="circlePosition w-[590px] h-[400px] bg-[#000] rounded-full absolute z-[-1] translate-x-[-50%] translate-y-[-50%] blur-[900px]"></div>    
            </section>
        </>
    );
}

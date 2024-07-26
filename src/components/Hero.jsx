import robot from '../../public/assets/img/logo/fffd.png'


export default function Hero() {
    return (
        <>


            <section id='home' className="xl:flex md:flex items-center justify-between w-full max-w-screen-xl mx-auto mt-40 relative ">
                <div className="mx-auto  lg:py-16 lg:px-12">
                    <h1 className=" m-4 text-5xl md:text-7xl lg:text-8xl font-medium font-Grandstander tracking-tight leading-none text-[#fff] justify-center">
                        Shaping Your Secure Digital Future with <samp className='font-Grandstander text-[#0EE9A0]'>Gap-X</samp> 
                    </h1>
                    <p className=" ml-4 text-white text-lg md:text-2xl lg:text-3xl">
                    Smart Blockchain Marketplace For Digital Goods Trading.
                    </p>
                   
                </div>
                <div className="mx-auto md:h-1/3 md:w-auto md:mt-20 lg:mt-0">
                    <img src={robot} alt="Robot" className="hidden lg:block sm:block" />
                </div>
                <div className="circlePosition w-[590px] h-[400px] bg-[#000] rounded-full absolute z-[-1] translate-x-[-50%] translate-y-[-50%] blur-[900px]"></div>
            </section>


        </>
    );
}

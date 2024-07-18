import robot from '../../public/assets/img/logo/fffd.png'


export default function Hero() {
    return (
        <>

        
            <section className="xl:flex  md:flex   items-center justify-between w-full " >
                <div className=" mt-40 mx-auto    text-center lg:py-16 lg:px-12">
                    {/* <a href="#"  className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                        <span  className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> 
                        <span  className="text-x font-medium">Flowbite is out! See what's new</span>
                        <svg  className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" ></path></svg>
                    </a> */}
                    <h1 className="mb-4 lg:text-8xl md:text-7xl text-6xl  font-medium font-Grandstander text-center  tracking-tight leading-none  text-[#869BA1] ">Shaping Your Secure Digital Future with Gap’X</h1>
                    <p className="mb-8 text-3xl font-thin font-Grandstander text-[#627B89]">A new smart block chain based marketplace for trading digital
                        goods & assets according.
                    </p> 
                </div>
                <div className='   mx-auto  md:h-1/3 md:w-auto md:mt-60  '>
                    <img src={robot} alt="" className=' hidden xl:block md:block  ' />

                </div>
                <div className="circlePosition w-[590px] h-[400px] bg-[#000] rounded-[100%] absolute z-1 
                 translate-x-[-50%] translate-y-[-50%] blur-[900px]">

                </div>
            </section>
        </>
    );
}

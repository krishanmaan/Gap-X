import React from 'react'

const Tokendetals = () => {
    return (
        <>
            <h2 className="lg:text-7xl text-5xl font-bold  font-Grandstander text-center text-white pt-10 ">Token <samp className="font-Grandstander text-[#0EE9A0]">Details</samp> </h2>
            <div className="mt-4 md:flex justify-center items-center max-w-screen-xl mx-auto px-4 gap-10 ">

                <ul className="list-none p-0 m-0 w-full md:w-1/2">
                    <li className="rounded-md border border-[#262932] flex items-center h-[60px] text-white text-[18px] mb-5">
                        <span
                            className="flex items-center h-full pl-5 bg-no-repeat text-[16px] font-normal text-[#b3b3c0] bg-cover bg-center w-1/2"
                            style={{
                                backgroundImage: 'url("https://celexworld.info/assets/img/shape/t_data_bg.png")',
                            }}
                        >
                            Token Name
                        </span>
                        <strong className="pl-4 md:pl-[50px] font-semibold">Gapx Coin</strong>
                    </li>
                    <li className="rounded-md border border-[#262932] flex items-center h-[60px] text-white text-[18px] mb-5">
                        <span
                            className="flex items-center h-full pl-5 bg-no-repeat text-[16px] font-normal text-[#b3b3c0] bg-cover bg-center w-1/2"
                            style={{
                                backgroundImage: 'url("https://celexworld.info/assets/img/shape/t_data_bg.png")',
                            }}
                        >
                            Coin Platform
                        </span>
                        <strong className="pl-4 md:pl-[50px] font-semibold">Binance</strong>
                    </li>
                    <li className="rounded-md border border-[#262932] flex items-center h-[60px] text-white text-[18px] mb-5 md:mb-0">
                        <span
                            className="flex items-center h-full pl-5 bg-no-repeat text-[16px] font-normal text-[#b3b3c0] bg-cover bg-center w-1/2"
                            style={{
                                backgroundImage: 'url("https://celexworld.info/assets/img/shape/t_data_bg.png")',
                            }}
                        >
                            Symbol
                        </span>
                        <strong className="pl-4 md:pl-[50px] font-semibold">Gapx</strong>
                    </li>
                </ul>
                <ul className="list-none p-0 m-0 w-full md:w-1/2">
                    <li className="rounded-md border border-[#262932] flex items-center h-[60px] text-white text-[18px] mb-5">
                        <span
                            className="flex items-center h-full pl-5 bg-no-repeat text-[16px] font-normal text-[#b3b3c0] bg-cover bg-center w-1/2"
                            style={{
                                backgroundImage: 'url("https://celexworld.info/assets/img/shape/t_data_bg.png")',
                            }}
                        >
                            Max Supply
                        </span>
                        <strong className="pl-4 md:pl-[50px] font-semibold">9000,000,000</strong>
                    </li>
                    <li className="rounded-md border border-[#262932] flex items-center h-[60px] text-white text-[18px] mb-5">
                        <span
                            className="flex items-center h-full pl-5 bg-no-repeat text-[16px] font-normal text-[#b3b3c0] bg-cover bg-center w-1/2"
                            style={{
                                backgroundImage: 'url("https://celexworld.info/assets/img/shape/t_data_bg.png")',
                            }}
                        >
                            Total Supply
                        </span>
                        <strong className="pl-4 md:pl-[50px] font-semibold">20,000,000</strong>
                    </li>
                    <li className="rounded-md border border-[#262932] flex items-center h-[60px] text-white text-[18px]">
                        <span
                            className="flex items-center  h-full pl-5 bg-no-repeat text-[16px] font-normal text-[#b3b3c0] bg-cover bg-center w-1/2"
                            style={{
                                backgroundImage: 'url("https://celexworld.info/assets/img/shape/t_data_bg.png")',
                            }}
                        >
                            1st Quarter Release
                        </span>
                        <strong className="pl-4 md:pl-[50px] font-semibold ">
                            Air Drop 10%
                        </strong>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default Tokendetals

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Core = () => {
    // const data = {
    //     labels: ['Launchpad Initiatives', 'Presale Distribution', 'Development ', 'Team', 'Bonus for Top Long-term Staking Partners', 'Reserved for future Strategic Initiatives'],
    //     datasets: [
    //         {
    //             label: '',
    //             data: [10, 40, 15, 15, 10,10],
    //             backgroundColor: [
    //                 '#44A08D',
    //                 '#033356',
    //                 '#136F84',
    //                 '#012641',
    //                 '#0B446D',
    //                 '#191F28',
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //             ],
    //             borderWidth: 1,
    //         },
    //     ],
    // };
    return (

        // <div className=" text-white py-12 h-screen  ">
        //     <h2 className="text-center text-5xl font-bold mb-10 font-Grandstander">Join the GAPX Token Ecosystem</h2>
        //     <div className=" mx-auto px-4 grid   grid-cols-1 gap-6 ">
        //         <div className="bg-gray-800 p-10 rounded-lg shadow-lg  ">
        //             <div className="flex items-center mb-4">
        //                 <div className="text-blue-500 text-3xl mr-4">💰</div>
        //                 <h3 className="text-xl font-semibold font-Grandstander">Launchpad</h3>
        //             </div>
        //             <p className='font-Inter' >Earn rewards by staking GAPX Tokens, contributing to network security and liquidity provision.</p>
        //         </div>
        //         <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
        //             <div className="flex items-center mb-4">
        //                 <div className="text-blue-500 text-3xl mr-4">⛏️</div>
        //                 <h3 className="text-xl font-semibold font-Grandstander">Presale</h3>
        //             </div>
        //             <p className='font-Inter' >Invite friends to join ExBit Global and earn rewards through our referral program, expanding your earnings with each new member.</p>
        //         </div>

        //         <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
        //             <div className="flex items-center mb-4">
        //                 <div className="text-blue-500 text-3xl mr-4">📱</div>
        //                 <h3 className="text-xl font-semibold font-Grandstander">Development</h3>
        //             </div>
        //             <p className='font-Inter' >Participate in token launch events via our launchpad, gaining early access to promising projects and potential investment opportunities.</p>
        //         </div>
        //         <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
        //             <div className="flex items-center mb-4">
        //                 <div className="text-blue-500 text-3xl mr-4">⚡</div>
        //                 <h3 className="text-xl font-semibold font-Grandstander">Team</h3>
        //             </div>
        //             <p className='font-Inter' >Engage in regular promotions and giveaways to win GAPX Tokens and other exciting rewards, recognizing your loyalty and active participation.</p>
        //         </div>
        //         <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
        //             <div className="flex items-center mb-4">
        //                 <div className="text-blue-500 text-3xl mr-4">🔒</div>
        //                 <h3 className="text-xl font-semibold font-Grandstander">Staking Partners Bonus</h3>
        //             </div>
        //             <p className='font-Inter' >Reserved for incentivizing staking activities, encouraging active participation in the ecosystem and promoting token liquidity.</p>
        //         </div>
        //         <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
        //             <div className="flex items-center mb-4">
        //                 <div className="text-blue-500 text-3xl mr-4">🔒</div>
        //                 <h3 className="text-xl font-semibold font-Grandstander">Reserve</h3>
        //             </div>
        //             <p className='font-Inter' >Held in reserve to support liquidity management, strategic partnerships, and unforeseen operational needs, ensuring stability and sustainability.</p>
        //         </div>
        //     </div>
        //     {/* <div className="flex justify-center items-center mt-20">
        //         <div className="w-1/2">
        //             <Doughnut data={data} />
        //         </div>
        //     </div> */}

        // </div>


        <div className="flex items-center justify-center min-h-screen  text-white py-12">
            <div className="">
                <h2 className="text-5xl font-bold mb-10 font-Grandstander text-center">Join the GAPX Token Ecosystem</h2>
                <div className=" mx-auto px-4 grid  gap-6">
                    <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="text-blue-500 text-3xl mr-4">💰</div>
                            <h3 className="text-xl font-semibold font-Grandstander">Launchpad</h3>
                        </div>
                        <p className='font-Inter'>Earn rewards by staking GAPX Tokens, contributing to network security and liquidity provision.</p>
                    </div>
                    <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="text-blue-500 text-3xl mr-4">⛏️</div>
                            <h3 className="text-xl font-semibold font-Grandstander">Presale</h3>
                        </div>
                        <p className='font-Inter'>Invite friends to join ExBit Global and earn rewards through our referral program, expanding your earnings with each new member.</p>
                    </div>
                    <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="text-blue-500 text-3xl mr-4">📱</div>
                            <h3 className="text-xl font-semibold font-Grandstander">Development</h3>
                        </div>
                        <p className='font-Inter'>Participate in token launch events via our launchpad, gaining early access to promising projects and potential investment opportunities.</p>
                    </div>
                    <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="text-blue-500 text-3xl mr-4">⚡</div>
                            <h3 className="text-xl font-semibold font-Grandstander">Team</h3>
                        </div>
                        <p className='font-Inter'>Engage in regular promotions and giveaways to win GAPX Tokens and other exciting rewards, recognizing your loyalty and active participation.</p>
                    </div>
                    <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="text-blue-500 text-3xl mr-4">🔒</div>
                            <h3 className="text-xl font-semibold font-Grandstander">Staking Partners Bonus</h3>
                        </div>
                        <p className='font-Inter'>Reserved for incentivizing staking activities, encouraging active participation in the ecosystem and promoting token liquidity.</p>
                    </div>
                    <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <div className="text-blue-500 text-3xl mr-4">🔒</div>
                            <h3 className="text-xl font-semibold font-Grandstander">Reserve</h3>
                        </div>
                        <p className='font-Inter'>Held in reserve to support liquidity management, strategic partnerships, and unforeseen operational needs, ensuring stability and sustainability.</p>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Core
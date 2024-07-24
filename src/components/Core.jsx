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

        // <div className="bg-gray-900 text-white py-12">
        //     <h2 className="text-center text-4xl font-bold mb-10">CORE ATTRIBUTES</h2>
        //     <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        //         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        //             <div className="flex items-center mb-4">
        //                 <div className="text-blue-500 text-3xl mr-4">💰</div>
        //                 <h3 className="text-xl font-semibold">Coin Acquisition</h3>
        //             </div>
        //             <p>Be a part of our project early on and witness your contribution increase in value as the project progresses. Upon listing on major exchanges, your early contributions will begin their journey as long-term assets.</p>
        //         </div>
        //         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        //             <div className="flex items-center mb-4">
        //                 <div className="text-blue-500 text-3xl mr-4">⛏️</div>
        //                 <h3 className="text-xl font-semibold">Mining Rigs</h3>
        //             </div>
        //             <p>Experience the simplest crypto mining with BlockDAG. Pick what suits you best from our three mining options. The BlockDAG X10, perfect for beginners, can mine 200 BDAG coins daily. The X30 mines 600 coins a day while the X100 can mine up to 2,000 BDAG coins daily, best for high returns and enterprise-scale operations.</p>
        //         </div>
        //         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        //             <div className="flex items-center mb-4">
        //                 <div className="text-blue-500 text-3xl mr-4">📱</div>
        //                 <h3 className="text-xl font-semibold">Mobile Mining</h3>
        //             </div>
        //             <p>The BlockDAG X1 is the simplest way you can mine crypto. You can start mining BDAG on your smartphone with no drain on data or battery life. Enjoy easy sign-ups, referral codes, and progress reports while you're on the app.</p>
        //         </div>
        //         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        //             <div className="flex items-center mb-4">
        //                 <div className="text-blue-500 text-3xl mr-4">⚡</div>
        //                 <h3 className="text-xl font-semibold">Speed, Redefined</h3>
        //             </div>
        //             <p>BlockDAG is the fastest PoW blockchain with confirmation speeds of 10 blocks per second. With high speed we can power up everything that comes our way, from high power DeFi protocols to flashy web3 browser and wallet you love.</p>
        //         </div>
        //         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        //             <div className="flex items-center mb-4">
        //                 <div className="text-blue-500 text-3xl mr-4">🔒</div>
        //                 <h3 className="text-xl font-semibold">Security, Reimagined</h3>
        //             </div>
        //             <p>Our innovative look at network security enables us to maintain high security without compromises on speed or decentralization. With our hybrid consensus mechanism, security is first priority and will always be the best in class with zero block wastage and strong cryptographic algorithms.</p>
        //         </div>
        //     </div>
        // </div>
        <div className=" text-white py-12 h-screen">
            <h2 className="text-center text-5xl font-bold mb-10 font-Grandstander">Join the GAPX Token Ecosystem</h2>
            <div className="max-w-6xl mx-auto px-4 grid   grid-cols-1 gap-6 ">
                <div className="bg-gray-800 p-10 rounded-lg shadow-lg  ">
                    <div className="flex items-center mb-4">
                        <div className="text-blue-500 text-3xl mr-4">💰</div>
                        <h3 className="text-xl font-semibold font-Grandstander">Launchpad</h3>
                    </div>
                    <p className='font-Inter' >Earn rewards by staking GAPX Tokens, contributing to network security and liquidity provision.</p>
                </div>
                <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                        <div className="text-blue-500 text-3xl mr-4">⛏️</div>
                        <h3 className="text-xl font-semibold font-Grandstander">Presale</h3>
                    </div>
                    <p className='font-Inter' >Invite friends to join ExBit Global and earn rewards through our referral program, expanding your earnings with each new member.</p>
                </div>
                <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                        <div className="text-blue-500 text-3xl mr-4">📱</div>
                        <h3 className="text-xl font-semibold font-Grandstander">Development</h3>
                    </div>
                    <p className='font-Inter' >Participate in token launch events via our launchpad, gaining early access to promising projects and potential investment opportunities.</p>
                </div>
                <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                        <div className="text-blue-500 text-3xl mr-4">⚡</div>
                        <h3 className="text-xl font-semibold font-Grandstander">Team</h3>
                    </div>
                    <p className='font-Inter' >Engage in regular promotions and giveaways to win GAPX Tokens and other exciting rewards, recognizing your loyalty and active participation.</p>
                </div>
                <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                        <div className="text-blue-500 text-3xl mr-4">🔒</div>
                        <h3 className="text-xl font-semibold font-Grandstander">Staking Partners Bonus</h3>
                    </div>
                    <p className='font-Inter' >Reserved for incentivizing staking activities, encouraging active participation in the ecosystem and promoting token liquidity.</p>
                </div>
                <div className="bg-gray-800 p-10 rounded-lg shadow-lg">
                    <div className="flex items-center mb-4">
                        <div className="text-blue-500 text-3xl mr-4">🔒</div>
                        <h3 className="text-xl font-semibold font-Grandstander">Reserve</h3>
                    </div>
                    <p className='font-Inter' >Held in reserve to support liquidity management, strategic partnerships, and unforeseen operational needs, ensuring stability and sustainability.</p>
                </div>
            </div>
            {/* <div className="flex justify-center items-center mt-20">
                <div className="w-1/2">
                    <Doughnut data={data} />
                </div>
            </div> */}
        </div>


    )
}

export default Core
import React from "react";
import Audit_Report from '../../public/assets/AuditReport.pdf'
import Our_Whitepaper from '../../public/assets/OurWhitepaper.pdf'

import audit from '../../public/assets/img/images/audit.png'
import audit1 from '../../public/assets/img/images/audit1.png'
export default function Audit() {
    return (
        <>
            <section className="special fuel-features mt-6  relative overflow-hidden max-w-screen-xl justify-center items-center mx-auto">

                <div className="container mx-auto   shadow-lg bg-[#010011] rounded-lg">
                    <div className="row flex flex-wrap items-center">
                        <div className="w-full lg:w-1/2 p-4 ">
                            <div className="welcome-meter relative">
                                <img
                                
                                    className="mx-auto h-96"
                                    src={audit1}
                                    alt="Whitepaper"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 p-4 pb-0">
                            <div className="who-we-contant">
                                <div className="dream-dots text-left  flex fadeInUp">
                                    <span className="  tracking-wide text-4xl md:text-7xl lg:text-6xl xl:text-7xl pb-2 text-center xl:text-left text-[#0EE9A0] font-Grandstander">
                                        Our Whitepaper
                                    </span>
                                </div>
                                <h4 className="text-xl font-semibold font-Grandstander text-[#fff] pb-1 ">
                                    Download Our Whitepaper
                                </h4>
                                <p className="fadeInUp font-Lotata text-sm text-gray-300 mb-4 ">
                                    The Gap X coin white paper outlines a revolutionary blockchain-based digital currency focused on secure, decentralized transactions, enhanced privacy features, and efficient scalability for widespread adoption in global financial systems.
                                </p>
                                <a
                                    className="links__btn text-sm text-black bg-[#0EE89F] font-Grandstander font-normal leading-[140%] transition duration-300 px-5 py-3 border-2 border-black rounded-full"
                                    href={Our_Whitepaper}
                                    download="Our Whitepaper.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto   bg-[#010011] shadow-lg rounded-lg">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-7/12 pt-0 p-4 pb-0">
                            <div className="who-we-contant">
                                <div className="dream-dots text-left  flex animate-fadeInUp">
                                    <span className="tracking-wide text-4xl md:text-7xl lg:text-6xl xl:text-7xl pb-2 text-center xl:text-left text-[#0EE9A0] font-Grandstander">
                                        Our Audit Report
                                    </span>
                                </div>
                                <h4 className="text-xl font-semibold font-Grandstander text-[#fff] pb-1">
                                    Download Our Audit Report
                                </h4>
                                <p className="fadeInUp font-Lotata text-sm text-gray-300 mb-4">
                                    Our audit report confirms Gap X coin's compliance with rigorous security standards, ensuring robust protection against vulnerabilities, transparency in operations, and trustworthiness in the blockchain ecosystem.
                                </p>
                                <a
                                    className="links__btn text-sm text-black bg-[#0EE89F] font-Grandstander font-normal leading-[140%] transition duration-300 px-5 py-3 border-2 border-black rounded-full"
                                    href={Audit_Report}
                                    download="Audit Report.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read Now
                                </a>

                            </div>
                        </div>
                        <div className="w-full lg:w-5/12 p-4">
                            <div className="welcome-meter relative">
                                <img
                                    className="mx-auto h-96"
                                    src={audit}
                                    alt="Audit Report"
                                />
                            </div>
                        </div>
                        <div id="TOKENOMICS"></div>
                    </div>
                </div>
            </section>
        </>
    );
}

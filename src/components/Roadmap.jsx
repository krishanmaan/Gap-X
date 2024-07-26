import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
// import './Timeline.css'; // CSS file ka path adjust kar lena
import './Timeline.scss'; // CSS file ka path adjust kar lena

const Timeline = () => {
    useEffect(() => {
        const sr = ScrollReveal();

        const revealOptions = {
            origin: 'left',
            distance: '-300px',
            easing: 'ease-in-out',
            duration: 800,
        };

        const handleResize = () => {
            if (window.innerWidth < 768) {
                document.querySelectorAll('.timeline-content.js--fadeInLeft').forEach(el => {
                    el.classList.remove('js--fadeInLeft');
                    el.classList.add('js--fadeInRight');
                });

                sr.reveal('.js--fadeInRight', {
                    ...revealOptions,
                    origin: 'right',
                });
            } else {
                sr.reveal('.js--fadeInLeft', revealOptions);
                sr.reveal('.js--fadeInRight', {
                    ...revealOptions,
                    origin: 'right',
                });
            }
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section id='roadMap' className="timeline  items-center flex justify-center">
            <div className="container ">
                {/* ITEM 1 */}
                <div className="timeline-item mb-16 relative">
                    <div className="timeline-img w-8 h-8 bg-primary "></div>
                    <div className="timeline-content  p-8 rounded shadow-custom js--fadeInLeft relative   mr-0">
                        <h2 className="text-2xl font-bold uppercase tracking-wide text-[#0EE9A0] font-Grandstander">Launch and Foundation</h2>
                        <h5 className=" mb-4 ">2024</h5>
                        <p className='font-Lotata text-sm pb-2'>Gapx Launch Event, o	Partnership Announcements, Community Building, Gapxbit Exchange Launch , Educational Campaigns</p>
                    </div>
                </div>

                {/* ITEM 2 */}

                <div className="timeline-item mb-16 relative">
                    <div className="timeline-img w-8 h-8 bg-primary "></div>
                    <div className="timeline-content  p-8 rounded shadow-custom js--fadeInRight relative   mr-0">
                        <h2 className="text-2xl font-bold uppercase tracking-wide  text-[#0EE9A0] font-Grandstander">Expansion and Integration</h2>
                        <h5 className=" mb-4 ">2025</h5>
                        <p className='font-Lotata text-sm pb-2'>Platform Integration, Marketing Initiatives, Gapx Wallet Enhancement, Strategic Partnerships</p>
                    </div>
                </div>

                {/* ITEM 3 */}
                <div className="timeline-item mb-16 relative">
                    <div className="timeline-img w-8 h-8 bg-primary "></div>
                    <div className="timeline-content  p-8 rounded shadow-custom js--fadeInLeft relative   mr-0">
                        <h2 className="text-2xl font-bold uppercase tracking-wide text-[#0EE9A0] font-Grandstander">Adoption and Global Reach </h2>
                        <h5 className=" mb-4 ">2026</h5>
                        <p className='font-Lotata text-sm pb-2'>Global Expansion, Enterprise Integration & User Feedback Loop</p>
                    </div>
                </div>

                {/* ITEM 4 */}
                <div className="timeline-item mb-16 relative">
                    <div className="timeline-img w-8 h-8 bg-primary "></div>
                    <div className="timeline-content  p-8 rounded shadow-custom js--fadeInRight relative   mr-0">

                        <h2 className="text-2xl font-bold uppercase tracking-wide  text-[#0EE9A0] font-Grandstander">Innovation and Beyond</h2>
                        <h5 className=" mb-4 ">2027 AND BEYOND </h5>
                        <p className='font-Lotata text-sm pb-2'>Innovative Marketing, Thought Leadership,
                            Sustainability Initiatives
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

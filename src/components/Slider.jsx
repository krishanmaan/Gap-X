
import './Slider.css'; 

function Slider() {
    return (
        <div className="relative overflow-hidden pt-10 max-w-screen-lg justify-center items-center mx-auto ">
            <div className="absolute inset-0 flex items-center justify-between px-10">
                <div className="w-64 h-full bg-gradient-to-l "></div>
                <div className="w-64 h-full bg-gradient-to-r "></div>
            </div>
            <div className="flex whitespace-nowrap animate-slide">
                <img src="https://cyberbot.pro/image/coinscope_picture.png" alt="3M" className="h-16 mx-16   " />
                <img src="https://codaio.imgix.net/docs/SFhNEwDos8/blobs/bl-cfg7fVVnB5/22018154d4a89c6c41a38855fa0d764a9803542a293285a1cccd7aa734e4b695b3c597a18aaeef7f8820cc81370985f4338ceb14a1f64ea04d58a9cb13bee8d526981bc0772e0fcbfdea0403eb8ba23f5bea4fc31ad2fa6694ef55b7d796c571c4e1e1de?auto=format%2Ccompress&fit=max" alt="Barstool Store" className="h-16 mx-10 " />
                <img src="https://emoneymax.net/emm/wp-content/uploads/2022/09/trend_poocoin-copy-copy.webp" alt="Budweiser" className="h-16 mx-10  " />
                <img src="https://d2c0db5b8fb27c1c9887-9b32efc83a6b298bb22e7a1df0837426.ssl.cf2.rackcdn.com/19490142-cyberscope-logo-full-2000x357.png" alt="BuzzFeed" className="h-16 mx-10 " />
                <img src="https://gemfinder.cc/upload/1626681850.png" alt="Forbes" className="h-16 mx-10 " />
                <img src="https://cdn.prod.website-files.com/6597cc7be68d63ec0c8ce33f/65b652c77b3c487c2a45ab01_DEXTools__white.webp" alt="Macy's" className="h-16 mx-10 " />

            </div>

        </div>
    );
}

export default Slider;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PrimaryBtn from './blocks/PrimaryBtn';

const Herosection = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className='bg-orange-100 pt-36 pb-24 px-5 md:px-10 xl:px-12 relative'>
            <div className='2xl:max-w-[1295px] lg:max-w-[1200px] mx-auto'>
                <div className='flex items-center gap-4' data-aos="fade-right" data-aos-duration="300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="2" viewBox="0 0 65 2" fill="none">
                        <path d="M0 1H65" stroke="#080808"></path>
                    </svg>

                    <div className="text-3xl font-bold">Hello, I'm</div>
                    <img src="victory.png" alt="Victory Icon" />
                </div>

                <div className='flex flex-col gap-10'>
                    <div>
                        <div className='text-[80px] xl:text-[120px] font-bold' data-aos="fade-right" data-aos-duration="400">
                            <span className='relative z-10 before:content-[""] before:-z-10 before:block before:bg-yellow-500 before:rounded-full before:w-[70px] before:h-[70px] lg:before:w-[100px] lg:before:h-[100px] before:left-0 before:top-3 xl:before:top-6 before:absolute'>Kishan</span>
                        </div>
                        <div className='text-[80px] xl:text-[120px] !leading-[0.6] font-bold' data-aos="fade-right" data-aos-duration="600">Kumar</div>

                        <div className="mt-5 text-2xl font-bold text-zinc-700" data-aos="fade-right" data-aos-duration="800">Front-End-Developer | Based in Delhi, India</div>

                        <div className="flex items-center gap-2 mt-8" data-aos="fade-right" data-aos-duration="1400">
                            <PrimaryBtn label="Let's Talk" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <img src="hero.png" data-aos="fade-left" className='absolute md:max-w-[360px] lg:max-w-[485px] xl:max-w-xl top-0 end-0' alt="Hero Illustration" />
            </div>
        </section>
    );
};

export default Herosection;

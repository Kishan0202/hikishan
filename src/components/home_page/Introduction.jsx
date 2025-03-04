import React from 'react'
import PrimaryBtn from './blocks/PrimaryBtn'

const Introduction = () => {
    return (
        <>
            <section className='bg-white pb-24 px-5 md:px-10 xl:px-12 aos-init aos-animate' data-aos="zoom-out" data-aos-delay="800">
                <div className='2xl:max-w-[1295px] lg:max-w-[1200px] mx-auto grid md:grid-cols-2 gap-5'>
                    <div>
                        <div class="relative">
                            <img src="/about1.png" alt="" />
                            <div class="flex flex-wrap flex-col absolute bottom-0 right-0">
                                <div className='text-[80px] font-bold'>
                                    <span className='relative z-10 before:content-[""] before:-z-10 before:block before:bg-yellow-500 before:rounded-full before:size-24 before:-left-[16px] before:top-0 before:absolute'>6+</span>
                                </div>
                                <span class="font-bold text-5xl text-white [text-shadow:1px_1px_0_rgba(8,8,8,0.4),-1px_-1px_0_rgba(8,8,8,0.4),1px_-1px_0_rgba(8,8,8,0.4),-1px_1px_0_rgba(8,8,8,0.4),1px_1px_0_rgba(8,8,8,0.4)]">Years of <br /> experience</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col'>
                            <div className='text-xl font-bold text-orange-400'>Hello I’m</div>
                            <div className='text-4xl xl:text-6xl font-bold'>
                                <span className='relative z-10 before:content-[""] before:-z-10 before:block before:bg-yellow-500 before:rounded-full before:size-9 lg:before:size-12 xl:before:size-16 before:left-0 before:top-3 xl:before:top-2 before:absolute'>Kishan Kumar, Front-End-Developer</span>
                            </div>
                            <div className='text-4xl font-bold mt-5'>Based in Delhi, India</div>
                            <div className='text-lg mt-5 text-gray-500'>
                                That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .
                            </div>

                            <div className="mt-5">
                                <PrimaryBtn label="Download My Resume" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction

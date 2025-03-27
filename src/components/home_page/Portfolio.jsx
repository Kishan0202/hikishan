import React from 'react'
import PrimaryBtn from './blocks/PrimaryBtn'

const Portfolio = () => {
    return (
        <>
            <section className='py-20 lg:py-24 bg-orange-100 px-5 md:px-10 xl:px-12'>
                <div className='2xl:max-w-[1295px] lg:max-w-[1200px] mx-auto'>
                    <div className='flex flex-col gap-10 lg:gap-18'>
                        {/* HEADING */}
                        <div className='flex flex-col text-center aos-init aos-animate' data-aos="fade-up" data-aos-delay="400">
                            <div className='text-xl font-bold text-orange-400'>Portfolio</div>
                            <div className='text-4xl xl:text-6xl font-bold'>
                                <span className='relative z-10 before:content-[""] before:-z-10 before:block before:bg-yellow-500 before:rounded-full before:size-9 lg:before:size-12 xl:before:size-16 before:left-0 before:top-3 xl:before:top-2 before:absolute'>My recent work</span>
                            </div>
                        </div>

                        {/* GRID */}
                        <div className="grid md:grid-cols-2 gap-7">
                            <div className='flex flex-col gap-4 aos-init aos-animate' data-aos="fade-up" data-aos-delay="600">
                                <img src="/project1.png" alt="" />

                                <div className='flex items-center gap-2'>
                                    <button type="button" className="px-4 group cursor-pointer uppercase font-medium py-1.5 text-xs flex items-center text-black bg-transparent hover:bg-black border hover:text-white duration-300 border-black focus:ring-0 focus:outline-none rounded-full text-center">
                                        <span>App</span>
                                    </button>

                                    <button type="button" className="px-4 group cursor-pointer uppercase font-medium py-1.5 text-xs flex items-center text-black bg-transparent hover:bg-black border hover:text-white duration-300 border-black focus:ring-0 focus:outline-none rounded-full text-center">
                                        <span>Development</span>
                                    </button>
                                </div>

                                <div className='w-full flex justify-between gap-3 group duration-300 items-center'>
                                    <div className='capitalize text-[32px] font-bold hover:text-orange-400 duration-300'>Moodboard App</div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-6 group-hover:animate-move-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                    </svg>
                                </div>
                            </div>

                            <div className='flex flex-col gap-4 aos-init aos-animate' data-aos="fade-up" data-aos-delay="800">
                                <img src="/project1.png" alt="" />

                                <div className='flex items-center gap-2'>
                                    <button type="button" className="px-4 group cursor-pointer uppercase font-medium py-1.5 text-xs flex items-center text-black bg-transparent hover:bg-black border hover:text-white duration-300 border-black focus:ring-0 focus:outline-none rounded-full text-center">
                                        <span>App</span>
                                    </button>

                                    <button type="button" className="px-4 group cursor-pointer uppercase font-medium py-1.5 text-xs flex items-center text-black bg-transparent hover:bg-black border hover:text-white duration-300 border-black focus:ring-0 focus:outline-none rounded-full text-center">
                                        <span>Development</span>
                                    </button>
                                </div>

                                <div className='w-full flex justify-between gap-3 group duration-300 items-center'>
                                    <div className='capitalize text-[32px] font-bold hover:text-orange-400 duration-300'>Moodboard App</div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="size-6 group-hover:animate-move-up" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10 *:w-full aos-init aos-animate' data-aos="fade-up" data-aos-delay="400">
                        <PrimaryBtn label="View All Project" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Portfolio

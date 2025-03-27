import React from 'react'
const Testimonial = () => {
    return (
        <>
            <section className='py-20 lg:py-24 bg-white px-5 md:px-10 xl:px-12'>
                <div className='2xl:max-w-[1295px] lg:max-w-[1200px] mx-auto'>
                    <div className='flex flex-col gap-10 lg:gap-18'>
                        {/* HEADING */}
                        <div className='flex flex-col aos-init aos-animate' data-aos="fade-up" data-aos-delay="400">
                            <div className='text-xl font-bold text-orange-400'>Testimonial</div>
                            <div className='text-4xl xl:text-6xl font-bold'>
                                <span className='relative z-10 before:content-[""] before:-z-10 before:block before:bg-yellow-500 before:rounded-full before:size-9 lg:before:size-12 xl:before:size-16 before:left-0 before:top-3 xl:before:top-2 before:absolute'>Client feedback</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial

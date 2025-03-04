import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black pt-28 pb-16 text-white px-5 md:px-10'>
            <div className="max-w-[1200px] mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-10'>
                        <div className='text-4xl lg:text-5xl xl:text-6xl font-bold'>
                            <span className='relative z-10 before:content-[""] before:-z-10 before:block before:bg-yellow-500 before:rounded-full before:size-9 lg:before:size-12 xl:before:size-16 before:left-0 before:top-2 before:absolute'>Le</span> t’s work together
                        </div>

                        <div className="flex items-center gap-3">
                            <div className='font-bold text-xl'>Based in Delhi , India</div> |
                            <div className="flex items-center gap-5">
                                <a href="#" className='text-xl duration-300 hover:text-yellow-500'>
                                    <i className="bi bi-github"></i>
                                </a>
                                <a href="#" className='text-xl duration-300 hover:text-yellow-500'>
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

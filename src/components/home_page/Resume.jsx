import React, { useState } from 'react';

const Resume = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [fadeEffect, setFadeEffect] = useState(false);

    const tabName = [
        { id: 1, label: "About me" },
        { id: 2, label: "Experience" },
        { id: 3, label: "Education" },
        { id: 4, label: "Skills" },
    ];

    const handleTabChange = (id) => {
        setFadeEffect(true); // Trigger fade effect
        setTimeout(() => {
            setActiveTab(id); // Change tab after fade effect
            setFadeEffect(false); // Reset fade effect
        }, 300); // Match this timeout with the CSS animation duration
    };

    return (
        <>
            <section className='py-20 lg:py-24 bg-gray-100 px-5 md:px-10 xl:px-12'>
                <div className='2xl:max-w-[1295px] lg:max-w-[1200px] mx-auto grid lg:grid-cols-3 gap-5'>
                    <div className="flex flex-col gap-10 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                        <div className='flex flex-col'>
                            <div className='text-xl font-bold text-orange-400'>Resume</div>
                            <div className='text-4xl xl:text-6xl font-bold'>
                                <span className='relative z-10 before:content-[""] before:-z-10 before:block before:bg-yellow-500 before:rounded-full before:size-9 lg:before:size-12 xl:before:size-16 before:left-0 before:top-3 xl:before:top-2 before:absolute'>All over my details find here...</span>
                            </div>
                        </div>

                        <div className="flex lg:flex-col flex-wrap gap-2">
                            {/* TABS BUTTON */}
                            {tabName.map((item) =>
                                <div onClick={() => handleTabChange(item.id)} key={item.id} className={`flex py-3 px-3 lg:px-7 lg:py-4 justify-between items-center gap-3 rounded-lg font-bold cursor-pointer group duration-300 ${activeTab === item.id ? 'bg-black text-white' : 'bg-white hover:bg-black hover:text-white'
                                    }`}>
                                    <div>{item.label}</div>
                                    <svg width="24" height="24" className='group-hover:animate-moveUp' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="lg:col-span-2 lg:pl-16 xl:pl-24 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
                        {/* TABS CONTENT */}
                        <div className={`transition-opacity duration-300 ${fadeEffect ? 'opacity-0' : 'opacity-100'}`}>
                            {activeTab === 1 && (
                                <div>
                                    <h2 className='text-3xl font-bold mb-7'>Based in Delhi, India</h2>

                                    <div className="flex flex-col gap-7 text-gray-600 text-lg tracking-wider mb-7">
                                        <p>Kishan Kumar, <span className='text-black'>Front-End-Developer</span>, Based in Delhi, India.  I have been focusing on honing my skills with Vue.js, and
                                            WordPress development. Bootstrap, Tailwind, JavaScript, HTML, CSS,
                                            SCSS, Vue Js, Figma and WordPress</p>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className='w-28 text-lg'>Name</div>
                                            <div className='text-lg md:text-2xl font-bold'>Kishan Kumar</div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className='w-28 text-lg'>Nationality</div>
                                            <div className='text-lg md:text-2xl font-bold'>Indian</div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className='w-28 text-lg'>Phone</div>
                                            <div className='text-lg md:text-2xl font-bold'>+91 - 9289367384</div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className='w-28 text-lg'>Email</div>
                                            <div className='text-lg md:text-2xl font-bold'>hikishan@gmail.com</div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className='w-28 text-lg'>Experience</div>
                                            <div className='text-lg md:text-2xl font-bold'>6+ Years</div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className='w-28 text-lg'>Language</div>
                                            <div className='text-lg md:text-2xl font-bold'>Hindi, English</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 2 && (
                                <div className='flex flex-col gap-10'>
                                    <h2 className='text-4xl font-bold mb-7'>Experience</h2>
                                    <div className='grid grid-col-2 gap-x-4 gap-y-5'>
                                        {/* Cards */}
                                        <div class="aos-init py-7 px-8 group rounded-lg bg-zinc-200 hover:bg-white hover:shadow-[0px_36px_100px_0px_rgba(8,_8,_8,_0.15);] aos-animate" data-aos="fade-up" data-aos-delay="900">
                                            <div class="flex flex-col gap-8">

                                                <div class="flex justify-between items-end gap-3">
                                                    <div class="text-xl font-bold group-hover:text-orange-400">JavaScript Developer</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 3 && (
                                <div>
                                    <h2 className='text-4xl font-bold mb-7'>Education</h2>
                                    <p>Details about my educational background, including degrees and certifications, are presented here.</p>
                                </div>
                            )}
                            {activeTab === 4 && (
                                <div>
                                    <h2 className='text-4xl font-bold mb-7'>Skills</h2>
                                    <p>A list of my professional skills and expertise is displayed in this section.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume

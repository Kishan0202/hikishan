import React from 'react';

const SpecialtiesBlock = ({ specialties }) => {
    if (!specialties) {
        console.error('Specialties prop is required');
        return null;
    }

    return (
        <>
            <div className="aos-init aos-animate py-7 px-8 group rounded-lg bg-zinc-100 hover:bg-white hover:shadow-[0px_36px_100px_0px_rgba(8,_8,_8,_0.15);]" data-aos="fade-up" data-aos-delay={specialties.delay}>
                <div className="flex flex-col gap-8">
                    <div className="size-12 bg-white group-hover:bg-zinc-100 rounded-full flex justify-center items-center shadow text-2xl">
                        <i className="bi bi-phone"></i>
                    </div>

                    <div className="flex justify-between items-end gap-3">
                        <div className="text-xl font-bold group-hover:text-orange-400">
                            {specialties.name}
                        </div>

                        {/* ARROW ICON */}
                        <span className='group-hover:animate-moveUp group-hover:text-orange-400'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpecialtiesBlock;

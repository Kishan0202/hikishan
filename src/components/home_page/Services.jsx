import React from 'react'
import SpecialtiesBlock from './blocks/SpecialtiesBlock'

const Services = () => {
   const specialties = [
      {
         id: 1,
         name: 'Mobile Apps Design',
         delay: 500
      },
      {
         id: 2,
         name: 'UI/UX Design',
         delay: 700
      },
      {
         id: 3,
         name: 'Website Design',
         delay: 900
      },
      {
         id: 4,
         name: 'Webflow Development',
         delay: 1100
      },
   ]
   return (
      <>
         <section className='bg-white py-24 px-5 md:px-10 xl:px-12'>
            <div className='2xl:max-w-[1295px] lg:max-w-[1200px] mx-auto flex flex-col gap-16'>
               <div className='grid lg:grid-cols-2 gap-10' data-aos="fade-up" data-aos-delay="400">
                  <div className='flex flex-col'>
                     <div className='text-xl font-bold text-orange-400'>Services</div>
                     <div className='text-4xl xl:text-6xl font-bold' data-aos="fade-right" data-aos-duration="400">
                        <span className='relative z-10 before:content-[""] before:-z-10 before:block before:bg-yellow-500 before:rounded-full before:size-9 lg:before:size-12 xl:before:size-16 before:left-0 before:top-3 xl:before:top-2 before:absolute'>My specialties</span>
                     </div>
                  </div>

                  <div className='text-lg text-zinc-500'>
                     Synergistically seize front-end methods of empowerment without extensive core competencies. Progressively repurpose alternative platforms
                  </div>
               </div>

               <div className="grid xl:grid-cols-3 gap-6">
                  <div className="xl:col-span-2 sm:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-3 gap-6">
                     {specialties.map((item) => <SpecialtiesBlock key={item.id} specialties={item} />)}
                  </div>
                  <div className="bg-black flex flex-col gap-3 text-white rounded-lg py-9 px-6 group aos-init aos-animate" data-aos="zoom-in" data-aos-delay="1000">
                     <div className="flex w-full justify-end">
                        {/* ARROW ICON */}
                        <span className='group-hover:animate-moveUp group-hover:text-orange-400'>
                           <svg className='size-20' viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.3333 56.6666L56.6667 23.3333" stroke="#FFB646" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M23.3333 23.3333H56.6667V56.6666" stroke="#FFB646" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path>
                           </svg>
                        </span>
                     </div>

                     <div className='mt-auto flex flex-col gap-1'>
                        <div className='text-orange-400 text-lg'>SAY HELLO!</div>
                        <div className='font-bold text-xl'>hikishan0202@gmail.com</div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Services

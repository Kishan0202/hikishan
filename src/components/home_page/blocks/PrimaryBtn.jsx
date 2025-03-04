import React from 'react'

const PrimaryBtn = ({ label }) => {
    return (
        <>
            <button type="button" className="px-6 group py-3.5 text-base font-bold text-[15px] flex items-center gap-2 text-white bg-black hover:bg-transparent border hover:text-black duration-300 border-black focus:ring-0 focus:outline-none rounded-lg text-center">
                <span>{label}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" className='group-hover:animate-moveUp' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </button>
        </>
    )
}

export default PrimaryBtn

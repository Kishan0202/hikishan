import React from 'react';

const Header = () => {
    return (
        <header className='w-full pl-4 xl:pl-12 z-50 absolute top-0 left-0'>
            <div className='flex justify-between items-center gap-3 border-b border-black'>
                {/* SITE LOGO */}
                <a href="#">
                    <img src="logo.png" className='w-[50px]' alt="Site Logo" />
                </a>

                {/* SITE MENU */}
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-3">
                        <div className='font-bold'>Let's Talk</div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>

                    <button type='button' className="flex justify-center items-center py-7 px-9 bg-black text-white hover:bg-gray-800" aria-label="Open Menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="8" width="18" height="2" fill="white"></rect>
                            <rect x="3" y="14" width="18" height="2" fill="white"></rect>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

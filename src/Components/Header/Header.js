import React, { useState } from 'react';
import Logo from '../Images/ef.jpeg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenuAndScroll = (sectionId) => {
        scrollToSection(sectionId);
        setIsOpen(false);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full h-16 flex items-center justify-between px-4 bg-white shadow-md fixed top-0 z-50">
            <div className="flex items-center">
                <div className="mr-4">
                    <img src={Logo} alt="Logo" className="h-12 overflow-y-hidden"/>
                </div>
                <div className="hidden lg:block">
                    <a onClick={() => closeMenuAndScroll('home')} className="text-gray-600 hover:text-gray-900 px-3 py-2 cursor-pointer">Sākums</a>
                    <a onClick={() => closeMenuAndScroll('noma')} className="text-gray-600 hover:text-gray-900 px-3 py-2 cursor-pointer">Noma</a>
                    <a onClick={() => closeMenuAndScroll('piedavajumi')} className="text-gray-600 hover:text-gray-900 px-3 py-2 cursor-pointer">Piedāvājumi</a>
                </div>
            </div>
            <div className="flex items-center">
                <button onClick={toggleMenu} className="block lg:hidden focus:outline-none cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </button>
            </div>
            <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                <div className="flex flex-col h-full bg-white">
                    <div className="flex items-center justify-between px-4 py-3 bg-white">
                        <div>
                            <img src={Logo} alt="Logo" className="h-8"/>
                        </div>
                        <button onClick={toggleMenu} className="focus:outline-none cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                    <div className={`px-4 flex flex-col ${isOpen ? 'items-start' : 'items-end'} lg:flex lg:items-center`}>
                        <a onClick={() => closeMenuAndScroll('home')} className="text-gray-600 hover:text-gray-900 px-3 py-2 cursor-pointer">Sākums</a>
                        <a onClick={() => closeMenuAndScroll('noma')} className="text-gray-600 hover:text-gray-900 px-3 py-2 cursor-pointer">Noma</a>
                        <a onClick={() => closeMenuAndScroll('piedavajumi')} className="text-gray-600 hover:text-gray-900 px-3 py-2 cursor-pointer">Piedāvājumi</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

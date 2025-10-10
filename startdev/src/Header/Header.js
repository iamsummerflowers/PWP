import React from 'react';
import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header({ currentPage, setCurrentPage }) {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-white/95 backdrop-blur elegant-shadow sticky top-0 z-50 elegant-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center h-20">
                <div className="w-1/12 flex items-center">
                    <button 
                        onClick={() => setCurrentPage('home')}
                        className="custom-red text-lg font-serif font-semibold hover:opacity-80 elegant-transition tracking-wide flex"
                    >
                        PWP
                    </button>
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <div className="mx-0 flex justify-self-end items-baseline space-x-2 w-6/12">
                        <button
                            onClick={() => setCurrentPage('home')}
                            className={`px-0 py-3 rounded-lg text-sm font-medium elegant-transition ${
                                currentPage === 'home' 
                                    ? 'elegant-button text-white' 
                                    : 'text-gray-700 hover:bg-red-100 custom-red'
                            }`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => setCurrentPage('about')}
                            className={`px-0 py-3 rounded-lg text-sm font-medium elegant-transition ${
                                currentPage === 'about' 
                                    ? 'elegant-button text-white' 
                                    : 'text-gray-700 hover:bg-red-100 custom-red'
                            }`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => setCurrentPage('village-sunday')}
                            className={`px-0 py-3 rounded-lg text-sm font-medium elegant-transition ${
                                currentPage === 'village-sunday' 
                                    ? 'elegant-button text-white' 
                                    : 'text-gray-700 hover:bg-red-100 custom-red'
                            }`}
                        >
                            Village Sunday
                        </button>
                    </div>
                </div>

                {/* Mobile menu button */}
                <div className="w-fit md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-gray-700 custom-red focus:outline-none elegant-transition"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 bg-white/95 backdrop-blur elegant-border rounded-b-lg">
                        <button
                            onClick={() => {
                                setCurrentPage('home');
                                setIsMenuOpen(false);
                            }}
                            className={`block px-6 py-3 rounded-lg text-base font-medium w-full text-left elegant-transition ${
                                currentPage === 'home' 
                                    ? 'elegant-button text-white' 
                                    : 'text-gray-700 hover:bg-gray-50 custom-red'
                            }`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => {
                                setCurrentPage('about');
                                setIsMenuOpen(false);
                            }}
                            className={`block px-6 py-3 rounded-lg text-base font-medium w-full text-left elegant-transition ${
                                currentPage === 'about' 
                                    ? 'elegant-button text-white' 
                                    : 'text-gray-700 hover:bg-gray-50 custom-red'
                            }`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => {
                                setCurrentPage('village-sunday');
                                setIsMenuOpen(false);
                            }}
                            className={`block px-6 py-3 rounded-lg text-base font-medium w-full text-left elegant-transition ${
                                currentPage === 'village-sunday' 
                                    ? 'elegant-button text-white' 
                                    : 'text-gray-700 hover:bg-gray-50 custom-red'
                            }`}
                        >
                            Village Sunday
                        </button>
                    </div>
                </div>
            )}
        </div>
    </nav>
  );
}

export default Header;
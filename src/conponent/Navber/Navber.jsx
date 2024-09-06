"use client"

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div>
            <nav className="border  px-2 sm:px-4 py-2.5 rounded shadow">
                <div className="container flex flex-wrap md:justify-center justify-between items-center mx-auto md:bg-white rounded-md bg-[#D1D1D1]">
                    <div className='block md:hidden'>
                        <a href="/" className="flex items-center pl-4">
                            <span className="text-black self-center text-xl font-semibold whitespace-nowrap">
                                Select Menu
                            </span>
                        </a>

                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
                        <ul className="flex flex-col my-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li className='mt-3'>
                                <Link
                                    href="/"
                                    className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className='mt-3'>
                                <Link
                                    href="/backportfoleo"
                                    className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Business Portfolio
                                </Link>
                            </li>
                            <li className='mt-3'>
                                <Link
                                    href="/newsandmedia"
                                    className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    News & Media
                                </Link>
                            </li>
                            <li className='mt-3'>
                                <Link
                                    href="/allbrand"
                                    className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >

                                    All Brands
                                </Link>
                            </li>
                            <li className='mt-3'>
                                <Link
                                    href="/accreditation"
                                    className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Accreditation
                                </Link>
                            </li>
                            <li className='mt-3'>
                                <Link
                                    href="/tvc"
                                    className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >

                                    TVC
                                </Link>
                            </li>
                            <li className='mt-3'>
                                <Link
                                    href="/csr"
                                    className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    CSR
                                </Link>
                            </li>
                            <li className='mt-3'>
                                <Link
                                    href="/gallery"
                                    className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li className='mt-3'>
                                <Link
                                    href="/contact"
                                    className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                                    aria-current="page"
                                >
                                    Contact Us
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

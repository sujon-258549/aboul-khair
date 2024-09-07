"use client";

import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="pb-2">
      <div>
        <img
          className="w-[93px] mx-auto mt-2"
          src="https://www.abulkhairgroup.com/wp-content/uploads/2024/05/cropped-abul-khair-group-logo-5C6C08FA1F-seeklogo.com_.png"
          alt="Abul Khair Group Logo"
        />
      </div>
      <nav className="px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap md:justify-center justify-between items-center mx-auto md:bg-white rounded-md bg-[#D1D1D1]">
          <div className="block md:hidden">
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
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              aria-controls="mobile-menu"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          <div
            className={`w-full md:block md:w-auto ${
              isMobileMenuOpen ? "" : "hidden"
            }`}
            id="mobile-menu"
          >
            <ul className="flex flex-col flex-wrap md:justify-center mb-0 my-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm font-bold">
              <li className="mt-2">
                <Link
                  href="/"
                  className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
            
              <li className="relative group mt-2">
                <div className="flex items-center space-x-5 bg-white px-4">
                  <Link
                    href="/about"
                    className="block flex gap-2 text-[18px]  pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                    aria-current="page"
                  >
                    About Us <FaAngleDown />
                  </Link>
                </div>
                {/* Dropdown */}
                <ul className="absolute invisible z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible md:w-[230px] mt-[8px] border-t-[4px] border-[#2EA3F2]">
                  <li className="p-2">
                    <Link
                      href="/founder"
                      className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                      aria-current="page"
                    >
                      Founder
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link
                      href="/group"
                      className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                      aria-current="page"
                    >
                      Group at a Glance
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link
                      href="/mitton"
                      className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                      aria-current="page"
                    >
                      Mission & Values
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link
                      href="/bordofdecettor"
                      className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                      aria-current="page"
                    >
                      Board of Directors
                    </Link>
                  </li>
                  <li className="p-2">
                    <Link
                      href="/kyemanegment"
                      className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                      aria-current="page"
                    >
                      Key Management
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="mt-2">
                <Link
                  href="/backportfoleo"
                  className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Business Portfolio
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="/newsandmedia"
                  className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  News & Media
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="/allbrand"
                  className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  All Brands
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="/accreditation"
                  className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Accreditation
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="/tvc"
                  className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  TVC
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="/csr"
                  className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  CSR
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="/gallery"
                  className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Gallery
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="/contactus"
                  className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href="/career"
                  className="block text-[18px] py-2 pr-3 pl-2 text-black bg-blue-700 rounded md:bg-transparent md:p-0"
                  aria-current="page"
                >
                  Career
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

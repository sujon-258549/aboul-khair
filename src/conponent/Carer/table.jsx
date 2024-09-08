import React from 'react';
import { IoMdSearch } from "react-icons/io";

const Table = () => {
    return (
        <div className='w-[85%] mx-auto px-5'>
            <div className='text-xl'>
                <p className='pb-5 pt-16'>Vacant Positions</p>





                <div className='overflow-x-auto w-full'>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg border">
                        <div className='flex justify-end py-2'>
                            <div className='w-[320px] mr-5'>
                                <form className="flex flex-col md:flex-row ">
                                    <div className="flex">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="w-full md:w-60 px-3 h-10 text-[16px] rounded-l border focus:outline-none"
                                        />
                                        <button
                                            type="submit"
                                            className="bg-[#286090] text-white  px-2 md:px-3 py-0 md:py-1"
                                        >
                                            <IoMdSearch />
                                        </button>
                                    </div>
                                    <select
                                        id="pricingType"
                                        name="pricingType"
                                        className="w-full h-10  pl-2 border focus:outline-none rounded-r px-2 md:px-3 py-0 md:py-1 tracking-wider"
                                    >
                                        <option selected="">
                                        </option>
                                        <option value="Freemium">Freemium</option>
                                        <option value="Free">Free</option>
                                        <option value="Paid">Paid</option>
                                    </select>
                                </form>


                            </div>
                        </div>

                        <div className="shadow-lg overflow-x-auto rounded-lg overflow-hidden">
                            <table className=" table-fixed">
                                <thead>
                                    <tr className="border-y">
                                        <th className="w-[30%] py-4 px-6 text-[15px] text-left font-bold ">

                                            Position Name and Date Of Posting
                                        </th>
                                        <th className="w-[40%] py-4 px-6 text-[15px]  text-left font-bold ">
                                            Details
                                        </th>
                                        <th className="w-[5%] py-4 px-6 text-[15px]  text-left font-bold ">
                                            Full/Part Time
                                        </th>
                                        <th className="w-[10%] py-4 px-6 text-[15px]  text-left font-bold">
                                            Location
                                        </th>
                                        <th className="w-[10%] py-4 px-6  text-[15px] text-left font-bold">
                                            Deadline
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-[]">
                                    <tr className='bg-[#d8d8d836] hover:bg-[#d8d8d8]'>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[18px]">Architect/ Sr. Architect</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            ব্যবসায়ীদের সাথে সম্পর্ক উন্নায়ন এবং প্রতিটি রিটেইল আউটলেটে নিজস্ব ব্রান্ড সমুহের উপস্থিতি নিশ্চিতকরণের পাশাপাশি ট্রেড বেনিফিট ও ব্রান্ডের গুণগতমান উপস্থাপন পূর্বক দায়িত্বপ্রাপ্ত জোনে নিজস্ব ব্রান্ড সমুহের বিক্রয় ও মার্কেট শেয়ার উত্তরোত্তর বৃদ্ধির জন্য সংস্থার নিয়মানুয়ায়ী নিষ্ঠা ও দক্ষতার সঙ্গে কাজ করা ।                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            Full-time
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            Chattogram, Dhaka
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            16 Dec 2021
                                        </td>


                                    </tr>
                                    <tr className='hover:bg-[#d8d8d8]'>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[18px]">Officer/ Sr. Officer - Civil</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            Planning, conducting and monitoring different activities related to beautification, renovation as well as exterior and interior decor of different offices while using the internal communication to reinforce and establish the core values of the company.                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            Full-time
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            Chattogram
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            16 Dec 2021
                                        </td>


                                    </tr>
                                    <tr className='bg-[#d8d8d82d] hover:bg-[#d8d8d8]'>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[18px]">ট্রেড মার্কেটিং রিপ্রেজেন্টেটিভ (TMR)</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            Planning, conducting and monitoring different activities related to beautification, renovation as well as exterior and interior decor of different offices while using the internal communication to reinforce and establish the core values of the company.

                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            Full-time
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            কক্সবাজার, কুমিল্লা, চট্টগ্রাম, চাঁদপুর, ঢাকা, নোয়াখালী, ফেনী, লক্ষ্মীপুর
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            16 Dec 2021
                                        </td>


                                    </tr>
                                    <tr className='hover:bg-[#d8d8d8]'>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[18px]">Asst. Marketing Officer (AMO) - Abul Khair Tobacco Company Limited (9th Dec 2020)</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            ব্যবসায়ীদের সাথে সম্পর্ক উন্নায়ন এবং প্রতিটি রিটেইল আউটলেটে নিজস্ব ব্রান্ড সমুহের উপস্থিতি নিশ্চিতকরণের পাশাপাশি ট্রেড বেনিফিট ও ব্রান্ডের গুণগতমান উপস্থাপন পূর্বক দায়িত্বপ্রাপ্ত জোনে নিজস্ব ব্রান্ড সমুহের বিক্রয় ও মার্কেট শেয়ার উত্তরোত্তর বৃদ্ধির জন্য সংস্থার নিয়মানুয়ায়ী নিষ্ঠা ও দক্ষতার সঙ্গে কাজ করা ।                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            Full-time
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            বাংলাদেশের যেকোনো স্থানে
                                        </td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-[14px]">
                                            16 Dec 2021
                                        </td>


                                    </tr>

                                    {/* Add more rows here */}
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

                <h4 className='text-xl font-bold pt-14 pb-3'>There are currently no other vacancies available.</h4>

                <p>However, we are always keen to meet energetic and talented professionals who would like to join our team.</p>
                <p className='pt-4'>If you wish to be considered for any future positions, please send your CV and covering letter to</p>


                <h4 className='text-xl font-bold pb-10 md:pb-20 text-[#0c71c3]'>: opportunity@abulkhairgroup.com</h4>
            </div>
        </div>
    );
}

export default Table;

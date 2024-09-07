import React from 'react';

const Table = () => {
    return (
        <div className='w-[85%] mx-auto px-5'>
            <div className='text-xl'>
                <p>Vacant Positions</p>




                <div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <div className='w-[20%]'>
                            <form className="flex flex-col md:flex-row gap-3">
                                <div className="flex">
                                    <input
                                        type="text"
                                        placeholder="Search for the tool you like"
                                        className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1"
                                    >
                                        Search
                                    </button>
                                </div>
                                <select
                                    id="pricingType"
                                    name="pricingType"
                                    className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider"
                                >
                                    <option value="All" selected="">
                                        All
                                    </option>
                                    <option value="Freemium">Freemium</option>
                                    <option value="Free">Free</option>
                                    <option value="Paid">Paid</option>
                                </select>
                            </form>

                        </div>
                        <table className="w-full text-sm text-left rtl:text-right">
                            <div></div>
                            <thead className="">
                                <tr>
                                    <th scope="col" className="font-bold text-[16px] px-6 py-3">
                                        Position Name and Date Of Posting
                                    </th>
                                    <th scope="col" className="font-bold text-[16px] px-6 py-3">
                                        Details
                                    </th>
                                    <th scope="col" className="font-bold text-[16px] px-6 py-3">
                                        Full/Part Time
                                    </th>
                                    <th scope="col" className="font-bold text-[16px] px-6 py-3">
                                        Location
                                    </th>
                                    <th scope="col" className="font-bold text-[16px] px-6 py-3">
                                        Dadeline
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium  whitespace-nowrap "
                                    >
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">Silver</td>
                                    <td className="px-6 py-4">Laptop</td>
                                    <td className="px-6 py-4">$2999</td>
                                    <td className="px-6 py-4">
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                                <tr className="">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium  whitespace-nowrap "
                                    >
                                        Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">White</td>
                                    <td className="px-6 py-4">Laptop PC</td>
                                    <td className="px-6 py-4">$1999</td>
                                    <td className="px-6 py-4">
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                                <tr className="">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium  whitespace-nowrap "
                                    >
                                        Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">Black</td>
                                    <td className="px-6 py-4">Accessories</td>
                                    <td className="px-6 py-4">$99</td>
                                    <td className="px-6 py-4">
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                                <tr className="">
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium  whitespace-nowrap "
                                    >
                                        Google Pixel Phone
                                    </th>
                                    <td className="px-6 py-4">Gray</td>
                                    <td className="px-6 py-4">Phone</td>
                                    <td className="px-6 py-4">$799</td>
                                    <td className="px-6 py-4">
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium  whitespace-nowrap "
                                    >
                                        Apple Watch 5
                                    </th>
                                    <td className="px-6 py-4">Red</td>
                                    <td className="px-6 py-4">Wearables</td>
                                    <td className="px-6 py-4">$999</td>
                                    <td className="px-6 py-4">
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Table;

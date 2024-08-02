import React from 'react';

export default function UserDashBoard() {
    return (
        <div className="p-1 rounded-l ">
            <h1 className="text-2xl pb-5 font-semibold ">User Dashboard</h1>
            {/* Dashboard Overview */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Box 1 */}
                <div className="relative bg-[#445368] p-4 rounded-lg shadow text-white flex items-center justify-center">
                    <div className="absolute top-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#445368] shadow-lg flex items-center justify-center text-white text-2xl font-semibold ring-2 ring-white">
                        <i class="fa-solid fa-briefcase"></i>
                    </div>
                    <span className="text-xl">Number Of Claims: 3</span>
                </div>

                {/* Box 2 */}
                <div className="relative bg-[#34d399] p-4 rounded-lg shadow text-white flex items-center justify-center">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#34d399] shadow-lg flex items-center justify-center text-white text-2xl font-semibold ring-2 ring-white">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <span className="text-xl">Verified By ABO: 3</span>
                </div>

                {/* Box 3 */}
                <div className="relative bg-[#fde047] p-4 rounded-lg shadow text-gray-800 flex items-center justify-center">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#fde047] shadow-lg flex items-center justify-center text-gray-800 text-2xl font-semibold ring-2 ring-white">
                        <i class="fa-regular fa-square-check"></i>
                    </div>
                    <span className="text-xl">Verified By CIT: 3</span>
                </div>

                {/* Box 4 */}
                <div className="relative bg-[#22d3ee] p-4 rounded-lg shadow text-white flex items-center justify-center">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#22d3ee] shadow-lg flex items-center justify-center text-white text-2xl font-semibold ring-2 ring-white">
                        <i class="fa-solid fa-money-check-dollar"></i>
                    </div>
                    <span className="text-xl">Payment Done: 2</span>
                </div>
            </div>

            {/* Table Section */}
            {/* Table Section */}
            <div className="mt-6 relative overflow-x-auto sm:rounded-lg">
                <h1 className="text-2xl pb-1 pt-3 font-semibold">Claims Details</h1>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-collapse border border-white">
                    <thead className="text-xs bg-[#66f1be] text-white uppercase dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-2 py-3 border border-white">Claim ID</th>
                            <th scope="col" className="px-2 py-3 border border-white">Claim Date</th>
                            <th scope="col" className="px-2 py-3 border border-white">Claim Year</th>
                            <th scope="col" className="px-2 py-3 border border-white">Claim Semester</th>
                            <th scope="col" className="px-2 py-3 border border-white">Claim Fees</th>
                            <th scope="col" className="px-2 py-3 border border-white">Claim Amount</th>
                            <th scope="col" className="px-2 py-3 border border-white">Amount to be Reimbursed</th>
                            <th scope="col" className="px-2 py-3 border border-white">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-[#889591]">
                            <th scope="row" className="px-2 font-medium text-white border border-white">001</th>
                            <td className="px-2 py-3 text-white border border-white">2024-07-01</td>
                            <td className="px-2 py-3 text-white border border-white">2024</td>
                            <td className="px-2 py-3 text-white border border-white">Q1</td>
                            <td className="px-2 py-3 text-white border border-white">$1000</td>
                            <td className="px-2 py-3 text-white border border-white">$800</td>
                            <td className="px-2 py-3 text-white border border-white">$700</td>
                            <td className="px-2 py-3 text-white border border-white">Approved</td>
                        </tr>
                    </tbody>
                </table>

                {/* Pagination and Entries Text */}
                <div className="flex justify-between items-center mt-4 p-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Showing 1 to 3 of 3 entries
                    </span>
                    <nav aria-label="Page navigation example">
                        <ul className="flex items-center -space-x-px h-8 text-sm">
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Previous</span>
                                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-blue-600 bg-blue-50 border border-blue-300 rounded-l-lg hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                                    1
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <span className="sr-only">Next</span>
                                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>




            </div>






        </div>
    );
}

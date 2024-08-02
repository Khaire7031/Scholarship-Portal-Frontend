import React from 'react';
import { useAuth } from '../provider/authProvider'; // Ensure this path is correct
import scholarshipImage from "../assets/images/scholarship.png";

export default function Navbar() {
    const { user, setToken } = useAuth(); // Ensure `setToken` is used for logout
    console.log("NavBar : ", user);

    const handleLogout = () => {
        // Clear the token and optionally redirect
        setToken(null);
        // Optionally redirect to login or home page
    };

    return (
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="container mx-auto px-4 py-3 lg:px-6 lg:py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src={scholarshipImage}
                            alt="Scholarship Logo"
                            className="w-10 h-10 object-cover dark:border-gray-600"
                        />
                        <span className="text-xl font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition duration-300 ease-in-out ms-2">
                            Scholarship Portal
                        </span>
                    </div>
                    <div className="flex items-center">
                        <button
                            type="button"
                            className="flex items-center justify-center bg-red-600 text-white w-10 h-10 rounded-full hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-600 transition duration-300 ease-in-out"
                            onClick={handleLogout}
                        >
                            <i className="fa-solid fa-right-from-bracket text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

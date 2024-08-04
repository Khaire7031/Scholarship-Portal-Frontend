import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
import Navbar from './Navbar';
import UserDashBoard from './UserDashBoard';

const DashBoard = () => {
    const { user, isLoading } = useAuth();
    const [activeTab, setActiveTab] = useState('dashboard');

    if (isLoading) return <div>Loading...</div>;

    if (!user) return <div>Please log in</div>;

    // Function to handle tab change
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Navbar />

            {/* Sidebar */}
            <aside id="logo-sidebar" className="fixed top-2 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="#" onClick={() => handleTabChange('dashboard')} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activeTab === 'dashboard' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => handleTabChange('profile')} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activeTab === 'profile' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                                <span className="flex-1 ms-3 whitespace-nowrap">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => handleTabChange('reimbursement')} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activeTab === 'reimbursement' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                                <span className="flex-1 ms-3 whitespace-nowrap">Reimbursement</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => handleTabChange('assignment')} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activeTab === 'assignment' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                                <span className="flex-1 ms-3 whitespace-nowrap">Assignment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => handleTabChange('update-contact-info')} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activeTab === 'update-contact-info' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                                <span className="flex-1 ms-3 whitespace-nowrap">Update Contact Info</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => handleTabChange('change-password')} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activeTab === 'change-password' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                                <span className="flex-1 ms-3 whitespace-nowrap">Change Password</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={() => handleTabChange('sign-out')} className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group ${activeTab === 'sign-out' ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                                <span className="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                            </Link>
                        </li>
                        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                            <div className="flex items-center">
                                <div className="ms-3">
                                    <p className="text-gray-900 dark:text-white">{user.email}</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{user.role}</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{user.id}</p>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </aside>

            {/* Dashboard Content */}
            <div className="p-2 pt-5 py-16 sm:ml-64">
                <div className="p-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    {activeTab === 'dashboard' && <UserDashBoard />}
                    {activeTab === 'profile' && <div>Profile Page Content</div>}
                    {activeTab === 'reimbursement' && <div><h2>Reimbursement Form</h2></div>}
                    {activeTab === 'assignment' && <div>Assignment Page Content</div>}
                    {activeTab === 'update-contact-info' && <div>Update Contact Info Page Content</div>}
                    {activeTab === 'change-password' && <div>Change Password Page Content</div>}
                    {activeTab === 'sign-out' && <div>Sign Out Page Content</div>}
                </div>
            </div>
        </>
    );
};

export default DashBoard;

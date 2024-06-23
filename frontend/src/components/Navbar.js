import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <a href="/">ManageTasks.com</a>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6">
                        <li className="mt-3 lg:mt-0"><Link to="/" className="text-white">Home</Link></li>
                        <li className="mt-3 lg:mt-0"><Link to="/features" className="text-white">Features</Link></li>
                        <li className="mt-3 lg:mt-0"><Link to="/about" className="text-white">About</Link></li>
                        <li className="mt-3 lg:mt-0"><Link to="/contact" className="text-white">Contact</Link></li>
                        <li className="mt-3 lg:mt-0"><Link to="/login" className="text-white">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

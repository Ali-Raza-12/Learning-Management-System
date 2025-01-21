import image from '../../assets/logo.svg';
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full h-auto bg-white border-gray-200 shadow-md py-4 px-10">
            <div className="max-w-full mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img className="w-[31px] h-[40px]" src={image} alt="logo" />
                    <a href="/" className="font-medium text-lg text-gray-800">Byway</a>
                </div>

                {/* Links and Search */}
                <div className="flex items-center gap-6">
                    {/* Categories */}
                    <a href="/category" className="text-gray-700 hidden md:flex hover:text-blue-600">Categories</a>

                    {/* Search Bar */}
                    <div className="relative items-center hidden sm:flex">
                        <CiSearch className="absolute left-3 text-gray-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 outline-none pr-4 py-2 border rounded-lg text-gray-600"
                        />
                    </div>

                    {/* Cart Icon */}
                    <CiShoppingCart className="w-8 h-8 text-gray-700 hover:text-blue-600" />

                    {/* Toggle Button for md devices */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-expanded={isMenuOpen}
                        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none"
                    >
                        <span className="sr-only">Toggle menu</span>
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>

                    {/* Links for lg devices */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a href="/teach" className="text-gray-700 w-[125px] hover:text-blue-600">Teach on Byway</a>
                        <Link to="/login">
                            <button className="px-4 py-2 w-[100px] rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100">
                                Log In
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button className="px-4 py-2 w-[100px] bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="absolute top-[74px] right-0 px-5 bg-white shadow-lg rounded-lg w-[250px] py-4 z-50 lg:hidden border border-gray-200">
                        {/* Search Bar */}
                        <div className="block sm:hidden relative mb-3">
                            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="pl-10 pr-4 py-2 w-full outline-none border rounded-lg text-grey7"
                            />
                        </div>


                        {/* Dropdown Links */}
                        <a
                            href="/category"
                            className="block md:hidden px-4 py-2 text-gray-700 hover:text-white hover:bg-blue-600 rounded transition duration-200"
                        >
                            Categories
                        </a>
                        <a
                            href="/teach"
                            className="block px-4 py-2 text-gray-700 hover:text-white hover:bg-blue-600 rounded transition duration-200"
                        >
                            Teach on Byway
                        </a>
                        <Link to="/signup">
                            <button
                                className="block w-full text-left px-4 py-2 text-blue-600 hover:text-white hover:bg-blue-700 rounded transition duration-200"
                            >
                                SignIn
                            </button>
                        </Link>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;

import image from '../../assets/logo.svg'
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <div className="w-full h-[65px] flex justify-between items-center xl:px-10 lg:px-8 px-5">
                <div className="w-[83px] h-auto flex items-center justify-center">
                    <img className="w-[31px] h-[40px]" src={image} alt="logo" />
                    <a href='/' className='font-inter font-medium text-[16px] text-grey7'>Byway</a>
                </div>

                <div className='leading-5 invisible md:visible'>
                    <a href="/category" className='font-inter font-medium text-[14px] text-gray-700'>Categories</a>
                </div>

                <div className="relative invisible md:visible xl:w-1/2 lg:w-[400px] w-[200px] h-[40px] gap-[10px] pl-[10px] py-[10px] rounded-[8px] border border-gray-700 flex items-center">
                    <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 w-[20px] h-[20px] text-gray-700" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-white w-full pl-12 pr-4 outline-none font-inter font-medium text-gray-700 leading-[20px]"
                    />
                </div>

                <div className='leading-5 invisible md:visible'>
                    <a href="/category" className='font-inter font-medium text-[14px] text-gray-700'>Teach on Byway</a>
                </div>

                <div className='w-[206px] h-[40px] flex gap-[24px] items-center'>
                    <CiShoppingCart className='w-[24px] h-[24px] text-grey-700' />

                    <Link to='/login'>
                        <button className='flex gap-[10px] p-[10px] leading-[20px] font-inter font-medium text-[14px] text-grey-700'>Log In</button>
                    </Link>

                    <Link to='/signup'>
                        <button className='flex gap-[10px] p-[10px] leading-[20px] font-inter font-medium text-[14px] bg-grey7 text-white'>Sign Up</button>
                    </Link>
                </div>

                {/* Hamburger Menu Icon moved here */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex items-center justify-center p-2"
                >
                    <svg
                        className="w-6 h-6 text-gray-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu - Dropdown for smaller screens */}
            <div
                className={`md:hidden absolute top-[65px] left-0 w-full bg-white border-t border-gray-700 ${
                    openMenu ? 'flex' : 'hidden'
                } flex-col gap-4 p-4`}
            >
                <a href="/category" className="font-inter font-medium text-[14px] text-gray-700">Categories</a>
                <a href="/category" className="font-inter font-medium text-[14px] text-gray-700">Teach on Byway</a>

                <div className="relative w-full h-[40px] gap-[10px] pl-[10px] py-[10px] rounded-[8px] border border-gray-700 flex items-center">
                    <CiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 w-[20px] h-[20px] text-gray-700" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-white w-full pl-12 pr-4 outline-none font-inter font-medium text-gray-700 leading-[20px]"
                    />
                </div>
            </div>
        </>
    );
};

export default Navbar;

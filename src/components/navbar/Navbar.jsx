import React, { useState } from 'react';
import Logo from '../../assets/logo-egs.png';
import { IoMdSearch } from 'react-icons/io';
import { FaShoppingCart, FaCaretDown, FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Menu = [
    { 
        id: 1, name: 'Home', link: '/#' 
    },
    { 
        id: 2, name: 'Keyboards', link: '/Keyboards' 
    },
    { 
        id: 3, name: 'Mouse', link: '/Mouse' 
    },
    { 
        id: 4, name: 'Headphones', link: '/Headphones' 
    },
];

const DropDownLinks = [
    { 
    id: 1, name: 'Trending Products', link: '/#' 
    },
    { 
    id: 2, name: 'Best Selling', link: '/#' 
    },
    { 
    id: 3, name: 'Top Rated', link: '/#' 
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="shadow-md bg-white dark:bg-grey-900 dark:text-white duration-200 relative z-40">
                {/* Upper Navbar */}
                <div className="bg-primary/40 py-2">
                    <div className="container flex justify-between items-center">
                        <div className="flex items-center">
                            <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-3'>
                                <img src={Logo} alt="Logo" className='w-10' />
                                Echo Gear
                            </a>
                        </div>
                        {/* Burger Menu Button */}
                        <div className="sm:hidden flex items-center">
                            <button onClick={toggleMenu} className="text-3xl">
                                {isMenuOpen ? <MdClose /> : <FaBars />}
                            </button>
                        </div>
                        {/* Search Bar and Cart for Desktop */}
                        <div className="hidden sm:flex items-center gap-4">
                            <div className="relative group">
                                <input
                                    type="text"
                                    placeholder='Search'
                                    className='w-[200px] group-hover:w-[300px] text-black transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary'
                                />
                                <IoMdSearch className='text-grey-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
                            </div>
                            <button
                                onClick={() => alert('Ordering not available yet')}
                                className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2 group'
                            >
                                <span className="group-hover:block hidden transition-all duration-200">
                                    Order
                                </span>
                                <FaShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer' />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Lower Navbar */}
                <div className={`sm:flex ${isMenuOpen ? 'block' : 'hidden'} bg-white dark:bg-grey-900 dark:text-white duration-200`}>
                    <div className="flex justify-center w-full">
                        <ul className="flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-0">
                            {Menu.map((data) => (
                                <li key={data.id}>
                                    <a href={data.link} className='inline-block px-4 py-2 hover:text-primary duration-200'>
                                        {data.name}
                                    </a>
                                </li>
                            ))}
                            {/* Simple Dropdown and Links */}
                            <li className="group relative cursor-pointer">
                                <a href="#" className='flex item-center gap-[2px] py-2'>
                                    Trending Products
                                    <span>
                                        <FaCaretDown className='transition-all duration-200 mt-1 group-hover:rotate-180' />
                                        <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white me-5 p-2 text-black shadow-md">
                                            <ul>
                                                {DropDownLinks.map((data) => (
                                                    <li key={data.id}>
                                                        <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>{data.name}</a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </span>
                                </a>
                            </li>
                            {/* Search Bar and Cart for Mobile */}
                            <li className="sm:hidden flex flex-col items-center w-full mt-4">
                                <div className="relative group w-full mb-4">
                                    <input
                                        type="text"
                                        placeholder='Search'
                                        className='w-full text-black transition-all duration-300 rounded-full border-gray-300 px-4 py-2 focus:outline-none focus:border-1 focus:border-primary'
                                    />
                                    <IoMdSearch className='text-grey-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-4' />
                                </div>
                                <button
                                    onClick={() => alert('Ordering not available yet')}
                                    className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-2 px-6 rounded-full flex items-center gap-2'
                                >
                                    <span>
                                        Order
                                    </span>
                                    <FaShoppingCart className='text-xl text-white drop-shadow-sm cursor-pointer' />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

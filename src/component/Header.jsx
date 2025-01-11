import logo from '../assets/Logo.png'
import { FaSearch } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { BsViewList } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    let [show, setShow] = useState(false)

    let handelShow = () => {
        setShow(!show)
    }

    return (
        <section className=''>
            <nav className="absolute top-0 left-0 w-full z-50 bg-4F5DE4 bg-opacity-15">
                <div className="container bg-4F5DE4 md:bg-transparent">
                    <div className="flex items-center justify-between py-4">
                        <a href="https://educate-project.vercel.app/"
                            className="z-30">
                            <img src={logo} className="lg:h-8 sm:h-7 h-5 lg:w-full w-[80%]" alt="Logo" />
                        </a>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <div className="flex items-center lg:w-[56px] w-[50px] justify-between text-[#FFFFFF] lg:mr-[20px] sm:mr-[10px] mr-[5px] z-30">
                                <FaSearch className='w-[20px] h-[20px] cursor-pointer' />
                                <HiOutlineUser className='w-[24px] h-[24px] cursor-pointer' />
                            </div>
                            <button type="button"
                                className="font-urbanist font-semibold text-[16px] text-white bg-F57005 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-[20px] py-[14.5px] text-center z-30"
                            >
                                Get In Touch
                            </button>
                            <div
                                onClick={handelShow}
                                className="inline-flex rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 px-[10px] z-30">
                                {show ? (
                                    <button type="button">
                                        <RxCross1 className='h-6 w-6 text-white' />
                                    </button>
                                ) : (
                                    <button type="button">
                                        <BsViewList className='h-6 w-6 text-white' />
                                    </button>
                                )}
                            </div>
                        </div>
                        {/*  */}
                        <div className={`items-center justify-between w-full flex md:w-auto z-30 md:static absolute 
                        ${show ? "bg-4F5DE4 top-[80px] left-0 ease-in-out duration-700 py-2"
                                : "left-[-400px] top-[140px] ease-in-out duration-700"}`}
                        >
                            <ul className={`flex flex-col font-urbanist font-semibold text-[16px] text-white p-4 md:p-0 mt-4 border lg:space-x-8 md:space-x-4 md:flex-row md:mt-0 md:border-0 ${show ? "w-full"
                                : "w-full"}`}>
                                <li>
                                    <Link to='/' className="block py-2 px-3 md:p-0">Home</Link>
                                </li>
                                <li>
                                    <Link to='/about' className="flex py-2 px-3 md:p-0 items-center">
                                        <span>About</span>
                                        <IoIosArrowDown className='ml-[6px] w-[10px] h-[10px]' />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="block py-2 px-3 md:p-0">Courses</Link>
                                </li>
                                <li>
                                    <Link className="block py-2 px-3 md:p-0">Pages</Link>
                                </li>
                                <li>
                                    <Link className="block py-2 px-3 md:p-0">Blog</Link>
                                </li>
                                <li>
                                    <Link className="block py-2 px-3 md:p-0">Shop</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Header
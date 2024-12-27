import logo from '../assets/Logo.png'
import { FaSearch } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { BsViewList } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';

const Header = () => {
    let [show, setShow] = useState(false)

    let handelShow = () => {
        setShow(!show)
    }

    return (
        <section>
            <div className="">


                <nav className="">
                    <div className="container bg-4F5DE4 flex flex-wrap items-center justify-between py-4">
                        <a href="https://educate-project.vercel.app/" className="">
                            <img src={logo} className="lg:h-8 sm:h-7 h-6" alt="Logo" />
                        </a>
                        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            <div className="flex items-center w-[56px] justify-between text-[#FFFFFF] lg:mr-[20px] sm:mr-[10px] mr-[5px]">
                                <FaSearch className='w-[20px] h-[20px]' />
                                <HiOutlineUser className='w-[24px] h-[24px]' />
                            </div>
                            <button type="button" className=" font-urbanist font-semibold text-[16px] text-white bg-F57005 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-[20px] py-[14.5px] text-center">Get In Touch</button>
                            <div onClick={handelShow} className="inline-flex rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 px-[10px]">
                                {show ? (
                                    <button type="button">
                                        <BsViewList className='h-6 w-6 text-white' />
                                    </button>
                                ) : (
                                    <button type="button">
                                        <RxCross1 className='h-6 w-6 text-white' />
                                    </button>
                                )}
                            </div>
                        </div>
                        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1  ${show ? "hidden" : "left-[-2000px] top-[200]"}`} id="navbar-sticky">
                            <ul className="flex flex-col font-urbanist font-semibold text-[16px] text-white p-4 md:p-0 mt-4 border lg:space-x-8 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                                <li>
                                    <a href="#" className="block py-2 px-3 md:p-0" aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="flex py-2 px-3 md:p-0 items-center">
                                        <span>About</span>
                                        <IoIosArrowDown className='ml-[6px] w-[10px] h-[10px]' />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 md:p-0">Courses</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 md:p-0">Pages</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 md:p-0">Blog</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 md:p-0">Shop</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </section>
    )
}

export default Header
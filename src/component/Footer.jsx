import logo from '../assets/Logo.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
    return (
        <footer className="bg-[#2A254D] font-urbanist">
            <div className="bg-[url('./src/assets/footer.png')] bg-no-repeat bg-center bg-cover">
                <div className="container space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="">
                                <img src={logo} alt="" />
                            </div>
                            <p className="mt-4 max-w-xs font-normal text-[18px] text-[#B3ADE1] leading-[29.4px]">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
                            <ul className="mt-8 flex gap-6">
                                <li className='w-[29.41px] h-[29.41px] flex justify-center items-center bg-[rgb(79,93,228,17%)] rounded-full text-white transition hover:opacity-75'>
                                    <FaFacebookF />
                                </li>
                                <li className='w-[29.41px] h-[29.41px] flex justify-center items-center bg-[rgb(79,93,228,17%)] rounded-full text-white'>
                                    <FaLinkedinIn />
                                </li>
                                <li className='w-[29.41px] h-[29.41px] flex justify-center items-center bg-[rgb(79,93,228,17%)] rounded-full text-white'>
                                    <FaTwitter />
                                </li>
                                <li className='w-[29.41px] h-[29.41px] flex justify-center items-center bg-[rgb(79,93,228,17%)] rounded-full text-white'>
                                    <FaYoutube />
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 lg:col-span-2 lg:grid-cols-2">
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                                <div>
                                    <p className="font-semibold text-[23.53px] text-white leading-[29.4px]">Quick Links</p>

                                    <ul className="mt-6 space-y-4 font-normal text-[18px] text-[#B3ADE1]">
                                        <li>
                                            <a href="#" className="transition hover:opacity-75"> Latest Courses </a>
                                        </li>

                                        <li>
                                            <a href="#" className="transition hover:opacity-75"> Mission & Vision </a>
                                        </li>

                                        <li>
                                            <a href="#" className="transition hover:opacity-75"> Our Approach </a>
                                        </li>

                                        <li>
                                            <a href="#" className="transition hover:opacity-75"> Exclusive Advisors </a>
                                        </li>

                                        <li>
                                            <a href="#" className="transition hover:opacity-75"> Join a Carrer </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold text-[23.53px] text-white leading-[29.4px]">Explore</p>

                                    <ul className="mt-6 space-y-4 font-normal text-[18px] text-[#B3ADE1]">
                                        <li>
                                            <a href="#" className="transition hover:opacity-75"> About Us </a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:opacity-75"> Upcoming Events </a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:opacity-75"> Blog & News </a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:opacity-75"> FAQ Question </a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:opacity-75"> Testimonial </a>
                                        </li>
                                        <li>
                                            <a href="#" className="transition hover:opacity-75"> Privacy Policy </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-[23.53px] text-white leading-[29.4px]">Contact Us</p>

                                <ul className="mt-6 space-y-4 font-normal text-[18px] text-[#B3ADE1]">
                                    <li>
                                        <a href="#" className="transition hover:opacity-75 flex items-center">
                                            <CiLocationOn className='text-[#F57005] w-[23.53px] h-[23.53px] mr-[16px]' />
                                            <span>6391 Elgin St. Celina, Delaware 10299</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="transition hover:opacity-75 flex items-center">
                                            <FiPhoneCall className='text-[#F57005] w-[23.53px] h-[23.53px] mr-[16px]' />
                                            <span>(303) 555-0105</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="transition hover:opacity-75 flex items-center">
                                            <TfiEmail className='text-[#F57005] w-[23.53px] h-[23.53px] mr-[16px]' />
                                            <span>michael.mitc@example.com</span>
                                        </a>
                                    </li>
                                    <li className='relative md:w-[409px] sm:w-[380px] w-[300px]'>
                                        <input type="email" name="" id="" placeholder='Email Address'
                                            className='placeholder:text-[#B3ADE1] bg-transparent border-[1px] border-[rgb(79,93,228,58%)] md:w-[300px] w-[190px] h-[54.89px] pl-[15px] pr-[30px] text-white focus:outline-none focus:ring-1 rounded-xl' />
                                        <button type="button"
                                            className='font-urbanist font-bold text-[17.64px] text-white h-[54.89px] px-[22.75px] bg-F57005 rounded-xl absolute right-[0px] transition hover:opacity-90'
                                        >Subscribe</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#1F1944] py-[35px]">
                <div className="container">
                    <p className="font-urbanist font-normal text-[16px] text-[#B3ADE1] leading-[30px]">&copy; Copyright 2023 by Company.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
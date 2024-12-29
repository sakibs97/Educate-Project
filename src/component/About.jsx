import coach from '../assets/about/Exclusive -Coach.png'
import minds from '../assets/about/Creative-Minds.png'
import tutorials from '../assets/about/Video-Tutorials.png'
import record from '../assets/about/Worlds-Record.png'
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 py-[80px]">
                    <div className="relative py-[40px] pl-[30px] pr-[25px] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden group cursor-pointer">
                        <span className="absolute bottom-0 right-0 w-[40px] h-[100px] -mb-6 -mr-3 transition-all duration-300 ease-out transform rotate-[40deg] translate-x-1 group-hover:translate-x-0 bg-[#F1F2FD] group-hover:bg-[#4F5DE4]"></span>
                        <div className="">
                            <img src={coach} alt="coach" className='p-[19px] bg-F57005 group-hover:bg-[#4F5DE4] duration-500 rounded-3xl' />
                        </div>
                        <h5 className='font-urbanist font-bold text-[18px] text-[#2A254D] py-[30px]'>Exclusive Coach</h5>
                        <p className='font-urbanist font-normal text-[14px] text-[#697585] leading-[25px]'>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit </p>
                        <button className='flex items-center pt-[30px]'>
                            <span className='font-urbanist font-bold text-[16px] text-F57005 pr-[9px]'>Read More</span>
                            <IoIosArrowForward className='w-[15px] h-[15px] text-4F5DE4' />
                        </button>
                    </div>
                    <div className="relative py-[40px] pl-[30px] pr-[25px] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden group cursor-pointer">
                        <span className="absolute bottom-0 right-0 w-[40px] h-[100px] -mb-6 -mr-3 transition-all duration-300 ease-out transform rotate-[40deg] translate-x-1 group-hover:translate-x-0 bg-[#F1F2FD] group-hover:bg-[#4F5DE4]"></span>
                        <div className="">
                            <img src={minds} alt="minds" className='p-[19px] bg-F57005 group-hover:bg-[#4F5DE4] duration-500 rounded-3xl' />
                        </div>
                        <h5 className='font-urbanist font-bold text-[18px] text-[#2A254D] py-[30px]'>Exclusive Coach</h5>
                        <p className='font-urbanist font-normal text-[14px] text-[#697585] leading-[25px]'>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit </p>
                        <button className='flex items-center pt-[30px]'>
                            <span className='font-urbanist font-bold text-[16px] text-F57005 pr-[9px]'>Read More</span>
                            <IoIosArrowForward className='w-[15px] h-[15px] text-4F5DE4' />
                        </button>
                    </div>
                    <div className="relative py-[40px] pl-[30px] pr-[25px] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden group cursor-pointer">
                        <span className="absolute bottom-0 right-0 w-[40px] h-[100px] -mb-6 -mr-3 transition-all duration-300 ease-out transform rotate-[40deg] translate-x-1 group-hover:translate-x-0 bg-[#F1F2FD] group-hover:bg-[#4F5DE4]"></span>
                        <div className="">
                            <img src={tutorials} alt="tutorials" className='p-[19px] bg-F57005 group-hover:bg-[#4F5DE4] duration-500 rounded-3xl' />
                        </div>
                        <h5 className='font-urbanist font-bold text-[18px] text-[#2A254D] py-[30px]'>Exclusive Coach</h5>
                        <p className='font-urbanist font-normal text-[14px] text-[#697585] leading-[25px]'>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit </p>
                        <button className='flex items-center pt-[30px]'>
                            <span className='font-urbanist font-bold text-[16px] text-F57005 pr-[9px]'>Read More</span>
                            <IoIosArrowForward className='w-[15px] h-[15px] text-4F5DE4' />
                        </button>
                    </div>
                    <div className="relative py-[40px] pl-[30px] pr-[25px] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden group cursor-pointer">
                        <span className="absolute bottom-0 right-0 w-[40px] h-[100px] -mb-6 -mr-3 transition-all duration-300 ease-out transform rotate-[40deg] translate-x-1 group-hover:translate-x-0 bg-[#F1F2FD] group-hover:bg-[#4F5DE4]"></span>
                        <div className="">
                            <img src={record} alt="record" className='p-[19px] bg-F57005 group-hover:bg-[#4F5DE4] duration-500 rounded-3xl' />
                        </div>
                        <h5 className='font-urbanist font-bold text-[18px] text-[#2A254D] py-[30px]'>Exclusive Coach</h5>
                        <p className='font-urbanist font-normal text-[14px] text-[#697585] leading-[25px]'>Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit </p>
                        <button className='flex items-center pt-[30px]'>
                            <span className='font-urbanist font-bold text-[16px] text-F57005 pr-[9px]'>Read More</span>
                            <IoIosArrowForward className='w-[15px] h-[15px] text-4F5DE4' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
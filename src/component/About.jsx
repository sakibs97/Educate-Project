import coach from '../assets/about/Exclusive -Coach.png'
import minds from '../assets/about/Creative-Minds.png'
import tutorials from '../assets/about/Video-Tutorials.png'
import record from '../assets/about/Worlds-Record.png'
import classes from '../assets/about/classes.png'
import live from '../assets/about/live.png'
import left from '../assets/about/Left.png'
import right from '../assets/about/right.png'
import shadow from '../assets/about/shadow.png'
import support from '../assets/about/support.png'
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {

    let aboutData = [
        {
            img: coach,
            title: 'Exclusive Coach',
            desc: 'Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit',
            link: '',
        },
        {
            img: minds,
            title: 'Creative Minds',
            desc: 'Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit',
            link: '',
        },
        {
            img: tutorials,
            title: 'Video Tutorials',
            desc: 'Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit',
            link: '',
        },
        {
            img: record,
            title: 'Worlds Record',
            desc: 'Lorem ipsum dolor sit amet consectetur. Convallis ornare semper id hendrerit diam. Mauris cursus suscipit',
            link: '',
        },
    ]

    return (
        <section className='bg-[url("./src/assets/about/about.png")] bg-no-repeat bg-center bg-cover '>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 py-[80px]">
                    {aboutData.map((data, index) => (
                        <div key={index} className="relative py-[40px] pl-[30px] pr-[25px] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden group cursor-pointer bg-white">
                            <span className="absolute bottom-0 right-0 w-[40px] h-[100px] -mb-6 -mr-3 transition-all duration-300 ease-out transform rotate-[40deg] translate-x-1 group-hover:translate-x-0 bg-[#F1F2FD] group-hover:bg-[#4F5DE4]"></span>
                            <div className="">
                                <img src={coach} alt="coach" className='p-[19px] bg-F57005 group-hover:bg-[#4F5DE4] duration-500 rounded-3xl' />
                            </div>
                            <h5 className='font-urbanist font-bold text-[18px] text-[#2A254D] py-[30px]'>{data.title}</h5>
                            <p className='font-urbanist font-normal text-[14px] text-[#697585] leading-[25px]'>{data.desc}</p>
                            <button className='flex items-center pt-[30px]'>
                                <span className='font-urbanist font-bold text-[16px] text-F57005 pr-[9px]'>Read More</span>
                                <IoIosArrowForward className='w-[15px] h-[15px] text-4F5DE4' />
                            </button>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 pb-[80px]">
                    <div className="relative flex justify-center lg:justify-start">
                        <div
                            className="relative flex items-center justify-center lg:w-[600px] lg:h-[600px] md:w-[530px] md:h-[530px] sm:w-[380px] sm:h-[380px] w-[290px] h-[290px] bg-[#152B4A] rounded-full"
                        >
                            <img src={right} alt="right" className='absolute right-0 bottom-0' />
                            <div className="absolute left-[28px] md:left-[-61px] bottom-[-50px] md:bottom-[50px]">
                                <div className="bg-white rounded-2xl p-[20px] md:py-[36px] pl-[40px] md:pl-[58px] md:pr-[93px] relative shadow-md cursor-pointer">
                                    <div className="">
                                        <p className='font-urbanist font-medium text-[16px] text-[#697585] leading-[26px]'>
                                            Need to Know More Details?
                                        </p>
                                        <p className='font-urbanist font-bold text-[24px] text-[#4F5DE4] leading-[26px] pt-[10px] md:pt-[20px]'>
                                            +(684) 555-0102</p>
                                    </div>
                                    <img src={shadow} alt="shadow" className='absolute right-0 top-[10px]' />
                                    <div className="absolute left-[-40px] top-[50%] translate-y-[-50%]">
                                        <div className='py-[19px] px-[22px] bg-F57005 rounded-full relative overflow-hidden'>
                                            <span className="absolute bottom-0 right-0 w-[33px] h-20 -mb-5 -mr-1 transition-all duration-300 ease-out transform rotate-[40deg] translate-x-1 bg-[#F6F5F5] opacity-35 rounded-3xl group-hover:translate-x-0"></span>
                                            <img src={support} alt="support" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="lg:w-[363px] lg:h-[363px] sm:w-[350px] sm:h-[350px] w-[270px] h-[270px] bg-gradient-to-b from-[rgb(255,114,0,39%)] to-[rgb(255,255,255,0%)] rounded-full"
                            ></div>
                        </div>
                        <img src={left} alt="left" className='absolute top-0 -z-10' />
                    </div>
                    <div className="pt-[100px] lg:pt-0">
                        <p className='font-urbanist font-bold text-[24px] text-4F5DE4 leading-[26px]'>About Us</p>
                        <h3 className='font-urbanist font-bold text-[40px] text-[#2A254D] leading-[47px] py-[30px]'>Creating a Lifelong Learning Best Community </h3>
                        <p className='font-urbanist font-normal text-[16px] text-[#697585] leading-[26px]'>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks</p>
                        <div className="bg-gradient-to-t from-[#FFFFFF] to-[#FF7200] rounded-2xl p-[1px] shadow-md my-[30px]">
                            <div className="bg-white rounded-2xl py-[24px] pl-[24px] pr-[32px] flex items-center">
                                <img src={classes} alt="classes" className='p-[19px] bg-[rgb(128,137,225,12%)] rounded-3xl' />
                                <div className="pl-[30px]">
                                    <h4 className='font-urbanist font-bold text-[20px] text-[#2A254D] leading-[26px] pb-[20px]'>
                                        Flexible Classes
                                    </h4>
                                    <p className='font-urbanist font-normal text-[16px] text-[#697585] leading-[26px]'>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-t from-[rgb(255,255,255,0%)] to-[#FF7200] rounded-2xl p-[1px] shadow-md mb-[30px]">
                            <div className="bg-white rounded-2xl py-[24px] pl-[24px] pr-[32px] flex items-center">
                                <img src={live} alt="classes" className='p-[19px] bg-[rgb(128,137,225,12%)] rounded-3xl' />
                                <div className="pl-[30px]">
                                    <h4 className='font-urbanist font-bold text-[20px] text-[#2A254D] leading-[26px] pb-[20px]'>
                                        Live Class From anywhere
                                    </h4>
                                    <p className='font-urbanist font-normal text-[16px] text-[#697585] leading-[26px]'>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                </div>
                            </div>
                        </div>
                        <button className="my-[30px] box-border relative z-30 inline-flex items-center justify-center w-auto px-[32px] py-[21.5px] overflow-hidden font-bold text-white transition-all duration-300 bg-4F5DE4 hover:bg-F57005 rounded-md cursor-pointer group ring-1 ring-[#FFFF] hover:ring-F57005 ease focus:outline-none">
                            <span className="absolute bottom-0 right-0 w-[33px] h-20 -mb-5 -mr-1 transition-all duration-300 ease-out transform rotate-[40deg] translate-x-1 bg-[#F6F5F5] opacity-10 group-hover:translate-x-0"></span>
                            <span className="relative z-20 flex items-center font-urbanist font-bold text-[18px] pr-[8px]">
                                Discover More
                            </span>
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
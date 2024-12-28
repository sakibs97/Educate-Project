import Header from "./Header"
import { FaCirclePlay } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
    return (
        <section className="bg-4F5DE4 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[url('././assets/vector.png')] after:bg-no-repeat after:bg-center pb-[132px] z-50">
            <Header />
            <div className="md:mt-[50px] md:pt-[35px] container flex flex-wrap justify-between z-40 relative after:absolute after:top-0 after:left-0 after:w-full after:h-[701px] after:bg-[url('././assets/vectorL.png')] after:bg-no-repeat after:bg-center after:bg-cover">
                <div className="text-white font-urbanist z-20 lg:mt-[50px]">
                    <h1 className="font-extrabold md:text-[70px] sm:text-[50px] text-[60px] md:leading-[85px]">
                        A Better <br></br> Learning Journey <br></br> Future Start Here
                    </h1>
                    <p className="font-normal text-[16px] leading-[32px] py-[30px]">All the Lorem Ipsum generators on the Internet tend to repeat <br></br> predefined chunks as necessary,</p>
                    <div className="">
                        <button className="my-[10px] mx-[5px] box-border relative z-30 inline-flex items-center justify-center w-auto px-[32px] py-[19px] overflow-hidden font-bold text-white transition-all duration-300 bg-F57005 rounded-md cursor-pointer group ring-1 ring-F57005 ease focus:outline-none">
                            <span className="absolute bottom-0 right-0 w-[33px] h-20 -mb-5 -mr-1 transition-all duration-300 ease-out transform rotate-[40deg] translate-x-1 bg-[#F6F5F5] opacity-10 group-hover:translate-x-0"></span>
                            <span className="relative z-20 flex items-center font-urbanist font-bold text-[18px] pr-[8px]">
                                Take Now
                            </span>
                            <FaArrowRightLong />
                        </button>
                        <button className="my-[10px] sm:ml-[20px] ml-[5px] box-border relative z-30 inline-flex items-center justify-center w-auto px-[32px] py-[19px] overflow-hidden font-bold text-white transition-all duration-300 bg-transparent hover:bg-F57005 rounded-md cursor-pointer group ring-1 ring-[#FFFF] hover:ring-F57005 ease focus:outline-none">
                            <span className="absolute bottom-0 right-0 w-[33px] h-20 -mb-5 -mr-1 transition-all duration-300 ease-out transform rotate-[40deg] translate-x-1 bg-[#F6F5F5] opacity-10 group-hover:translate-x-0"></span>
                            <span className="relative z-20 flex items-center font-urbanist font-bold text-[18px] pr-[8px]">
                                Find The Course
                            </span>
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
                <div className="relative lg:pt-0 pt-[50px]">
                    <div
                        className="relative flex items-center justify-center lg:w-[600px] lg:h-[600px] md:w-[530px] md:h-[530px] sm:w-[380px] sm:h-[380px] w-[300px] h-[300px] bg-gradient-to-br from-[#FF7200] to-[#6A78FF] rounded-full"
                    >
                        <div
                            className="lg:w-[550px] lg:h-[550px] md:w-[500px] md:h-[500px] sm:w-[350px] sm:h-[350px] w-[280px] h-[280px] bg-[#152B4A] rounded-full"
                        ></div>
                    </div>
                    <div
                        className="absolute md:top-[40%] top-[20%] translate-y-[-50%] md:right-[-65px] right-0 border-[1px] md:w-[157px] md:h-[158px] sm:w-[140px] sm:h-[140px] w-[110px] h-[110px] flex justify-center items-center rounded-full"
                    >
                        <div
                            className=" bg-[#152B4A] rounded-full md:w-[125.86px] md:h-[125.86px] sm:w-[110px] sm:h-[110px] w-[90px] h-[90px] flex justify-center items-center"
                        >
                            <FaCirclePlay className="w-[50px] h-[50px] text-white bg-F57005 rounded-full overflow-hidden" />
                        </div>
                    </div>
                    <div className="absolute md:bottom-[30px] bottom-[-120px] md:left-[-50px]">
                        <div
                            className="font-urbanist font-semibold bg-white w-[209px] rounded-2xl relative z-30 overflow-hidden hover:ring-1 ring-F57005"
                        >
                            <span
                                className="absolute bottom-0 right-0 w-[60px] h-20 -mb-12 -mr-4 rotate-[60deg] bg-[#4F5DE4] opacity-100"
                            ></span>
                            <div className="pl-[28.05px] pb-[20px] pt-[30px] z-20">
                                <h6 className="text-[15.78px] leading-[28px] text-[#000000] z-50">Latest Work Shop</h6>
                                <p className="text-[12.27px] leading-[28px] text-[#B7B0B4]">Graphic Design</p>
                                <button
                                    className="font-bold text-[15.78px] text-white flex items-center py-[11.59px] px-[14.02px] bg-F57005 rounded-lg mt-[18px]"
                                >
                                    <span className="pr-[9px]">Join Now</span>
                                    <FaArrowRightLong />
                                </button>
                            </div>
                        </div>
                        <div className="absolute top-[-40px] left-[20px] z-50">
                            <div
                                className="relative flex items-center justify-center w-[67px] h-[67px] bg-[#4F5DE4] rounded-full border-t-[2px] border-F57005 z-20 overflow-visible"
                            >
                                <div className="w-[53px] h-[53px] bg-[#152B4A] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
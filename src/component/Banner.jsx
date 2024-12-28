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
                    <p className="font-normal text-[16px] leading-[32px] py-[40px]">All the Lorem Ipsum generators on the Internet tend to repeat <br></br> predefined chunks as necessary,</p>
                    <div className="">
                        <button className="box-border relative z-30 inline-flex items-center justify-center w-auto px-[32px] py-[19px] overflow-hidden font-bold text-white transition-all duration-300 bg-F57005 rounded-md cursor-pointer group ring-1 ring-F57005 ease focus:outline-none">
                            <span className="absolute bottom-0 right-0 w-[33px] h-20 -mb-5 -mr-1 transition-all duration-300 ease-out transform rotate-[40deg] translate-x-1 bg-[#F6F5F5] opacity-10 group-hover:translate-x-0"></span>
                            <span className="relative z-20 flex items-center text-sm">
                                Take Now
                            </span>
                        </button>
                        <button className="ml-[20px] box-border relative z-30 inline-flex items-center justify-center w-auto px-[32px] py-[19px] overflow-hidden font-bold text-white transition-all duration-300 bg-transparent hover:bg-F57005 rounded-md cursor-pointer group ring-1 ring-[#FFFF] hover:ring-F57005 ease focus:outline-none">
                            <span className="absolute bottom-0 right-0 w-[33px] h-20 -mb-5 -mr-1 transition-all duration-300 ease-out transform rotate-[40deg] translate-x-1 bg-[#F6F5F5] opacity-10 group-hover:translate-x-0"></span>
                            <span className="relative z-20 flex items-center text-sm">
                                Find The Course
                            </span>
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <div className="relative flex items-center justify-center w-[600px] h-[600px] bg-gradient-to-br from-[#FF7200] to-[#6A78FF] rounded-full">
                        <div className="w-[550px] h-[550px] bg-[#152B4A] rounded-full"></div>
                    </div>
                    <div className="absolute top-[40%] translate-y-[-50%] right-[-65px] border-[1px] w-[157px] h-[158px] flex justify-center items-center rounded-full">
                        <div className="p-[38px] bg-[#152B4A] rounded-full w-[125.86px]">
                            <FaCirclePlay className="w-[50px] h-[50px] text-white bg-F57005 rounded-full overflow-hidden" />
                        </div>
                    </div>
                    <div className="absolute bottom-[30px] left-[-50px]">
                        <div className="font-urbanist font-semibold bg-white w-[209px] rounded-2xl relative z-30 overflow-hidden hover:ring-1 ring-F57005">
                            <span className="absolute bottom-0 right-0 w-[60px] h-20 -mb-12 -mr-4 rotate-[60deg] bg-[#4F5DE4] opacity-100"></span>
                            <div className="pl-[28.05px] pb-[20px] pt-[30px] z-20">
                                <h6 className="text-[15.78px] leading-[28px] text-[#000000] z-50">Latest Work Shop</h6>
                                <p className="text-[12.27px] leading-[28px] text-[#B7B0B4]">Graphic Design</p>
                                <button className="font-bold text-[15.78px] text-white flex items-center py-[11.59px] px-[14.02px] bg-F57005 rounded-lg mt-[18px]">
                                    <span className="pr-[9px]">Join Now</span>
                                    <FaArrowRightLong />
                                </button>
                            </div>
                        </div>
                        <div className="absolute top-[-40px] left-[20px] z-50">
                            <div className="relative flex items-center justify-center w-[67px] h-[67px] bg-[#4F5DE4] rounded-full border-t-[2px] border-F57005 z-20 overflow-visible">
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
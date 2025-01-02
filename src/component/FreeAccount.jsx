import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";



const COUNTDOWN_TARGET = new Date('2026-12-31').getTime();

const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / (1000)) % 60);
    return { days, hours, minutes, seconds };
}


const FreeAccount = () => {

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    return (
        <section className=" bg-[url('././assets/freeAccount/free-ban.png')] bg-no-repeat bg-center bg-cover relative">
            <span className="absolute top-0 left-0 w-full h-full bg-4F5DE4 -z-20"></span>
            <div className="container ">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[100px] items-center">
                    <div className="pt-[82px] pb-[30px] md:pb-[93px] ">
                        <h3 className="font-urbanist font-bold text-[40px] text-[#ffffff]">Create Your Free Account</h3>
                        <div className="py-[39px] px-[28px] bg-[rgb(255,252,252,12%)] rounded-lg my-[40px] relative overflow-hidden">
                            <p className="font-urbanist font-normal text-[20px] text-white leading-[30px]">The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic.</p>
                            <span className="absolute bottom-[-55px] right-[-10px] w-[50px] h-[130px] transition-all duration-300 ease-out transform rotate-[30deg] translate-x-1 bg-F57005 opacity-100 group-hover:translate-x-0"></span>
                        </div>
                        <button className="box-border relative z-30 inline-flex items-center justify-center w-auto px-[32px] py-[21.5px] overflow-hidden font-bold text-white transition-all duration-300 hover:opacity-100 opacity-90 bg-F57005 rounded-md cursor-pointer group ease focus:outline-none">
                            <span className="absolute bottom-0 right-0 w-[33px] h-20 -mb-5 -mr-1 transition-all duration-300 ease-out transform rotate-[40deg] translate-x-1 bg-[#F6F5F5] opacity-10 group-hover:translate-x-0"></span>
                            <span className="relative z-20 flex items-center font-urbanist font-bold text-[18px] pr-[8px]">
                                Join Now
                            </span>
                            <FaArrowRightLong />
                        </button>
                    </div>
                    <div className="bg-[url('././assets/freeAccount/Shape.png')] bg-no-repeat bg-center bg-cover w-full h-full">
                        <div className="w-[300px] md:w-[392px] md:h-[392px] bg-[#FFFFFF] md:rounded-full rounded-3xl py-[20px] md:py-0 mx-auto mt-[20px] items-center justify-center flex my-[80px]">
                            <div className="w-[210px]">
                                <h6 className="font-urbanist font-bold text-[24px] text-2A254D">Register Now and Get a
                                    <span className="text-F57005 pl-[7px]">50% Discount</span>
                                </h6>
                                <div className="mt-[20px] md:mt-[30px] grid grid-cols-2 gap-x-[44px] gap-y-[25px] font-urbanist relative after:absolute after:left-0 after:top-[50%] after:translate-y-[50%] after:w-[100%] after:h-[1px] after:bg-[#F1F2FD] before:absolute before:right-[50%] before:top-0 before:translate-x-[50%] before:w-[1px] before:h-[100%] before:bg-[#F1F2FD]">
                                    {Object.entries(timeLeft).map((el, index) => {
                                        const label = el[0];
                                        const value = el[1];
                                        return (
                                            <div key={index} className=" bg-[#F1F2FD] w-[77.78px] p-[10px] md:pt-[16px] md:pb-[16px] text-center rounded-2xl">
                                                <div className="value">
                                                    <span className="font-bold text-[26.34px] text-4F5DE4">{value}</span>
                                                </div>
                                                <span className="label font-normal text-[14.58px] text-2A254D leading-[21.1px]">{label}</span>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default FreeAccount
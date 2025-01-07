import Frame from '../assets/skill-cta/Frame.png';
import { FaArrowRightLong } from "react-icons/fa6";

const SkillsCertificate = () => {
    return (
        <section className="pb-[80px]">
            <div className="container bg-4F5DE4 relative text-white z-30 rounded-xl overflow-visible">
                <span className="absolute right-[-0%] top-[-0%] w-[50%] h-[80%] bg-[url('././assets/skill-cta/right.png')] bg-no-repeat bg-center bg-cover -z-10 rounded-xl"></span>
                <div className="flex justify-between">
                    <div className="ml-[80px] w-[400px] py-[50px]">
                        <p className='text-[52.14px] text-F57005'>Get your quality</p>
                        <h2 className="text-[48px] font-bold leading-[50px] mb-[40px]">Skills certificate from the edulerns</h2>
                        <button className="box-border relative z-30 inline-flex items-center justify-center w-auto px-[32px] py-[21.5px] overflow-hidden font-bold text-white transition-all duration-300 hover:opacity-100 opacity-90 bg-F57005 rounded-md cursor-pointer group ease focus:outline-none">
                            <span className="absolute bottom-0 right-0 w-[33px] h-20 -mb-5 -mr-1 transition-all duration-300 ease-out transform rotate-[40deg] translate-x-1 bg-[#F6F5F5] opacity-10 group-hover:translate-x-0"></span>
                            <span className="relative z-20 flex items-center font-urbanist font-bold text-[18px] pr-[8px]">
                                Get Started Now
                            </span>
                            <FaArrowRightLong />
                        </button>
                        <span className="absolute left-[-0%] bottom-[-0%] w-[50%] h-full bg-[url('././assets/skill-cta/left.png')] bg-no-repeat bg-center bg-cover -z-10 rounded-xl"></span>
                    </div>
                    <div className="w-[300px] z-30">
                        <img src={Frame} alt="" className='absolute bottom-0' />
                    </div>
                    <div className="w-[600px] bg-[url('././assets/skill-cta/three-back.png')] bg-no-repeat bg-center bg-cover z-30">
                        <div className="w-[460px] h-[461px] bg-2A254D rounded-full mx-auto">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsCertificate
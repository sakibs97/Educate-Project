import Header from "./Header"


const Banner = () => {
    return (
        <section className="bg-4F5DE4 relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[url('././assets/vector.png')] after:bg-no-repeat after:bg-center">
            <Header />
            <div className="pt-[195px] pb-[132px] container z-50 relative after:absolute after:top-0 after:left-0 after:w-full after:h-[701px] after:bg-[url('././assets/vectorL.png')] after:bg-no-repeat after:bg-center after:-z-10">
                <div className="text-white font-urbanist z-40">
                    <h1 className="font-extrabold text-[70px] leading-[85px]">
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
            </div>
        </section>
    )
}

export default Banner
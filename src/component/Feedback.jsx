import Brush from '../assets/feedback/Brush.png'

const Feedback = () => {
    return (
        <section className="pt-[80px] pb-[220px]">
            <div className="container font-urbanist font-normal">
                <div className="text-center">
                    <p className="font-bold text-[24px] text-4F5DE4">
                        Testimonial
                    </p>
                    <h3 className="font-bold text-[40px] text-2A254D">
                        What Our Student Feedback
                    </h3>
                </div>
                <div className=" rounded-2xl shadow-xl mt-[100px] relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                        <div className="p-[30px]">
                            <div className="w-[136px] h-[136px] bg-2A254D rounded-full absolute top-[-30px]"></div>
                            <p className="text-[20px] text-2A254D pt-[90px]">
                                Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet. Flexible Classes refers to the process  flexible Classes refers to the process
                            </p>
                            <div className="pt-[30px]">
                                <h6 className="font-bold text-[20px] leading-[26px] text-2A254D">
                                    Savannah Nguyen
                                </h6>
                                <p className="font-medium text-[12px] text-[#697585] uppercase leading-[25px]">
                                    UI/UX Designer
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[url('././assets/feedback/Shape.png')] bg-cover bg-no-repeat absolute right-0 top-[-30%] w-[610px] h-[562px]">
                        <div className="w-[470px] h-[470px] bg-2A254D rounded-full relative">
                            <img src={Brush} alt="" className='absolute right-0' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback
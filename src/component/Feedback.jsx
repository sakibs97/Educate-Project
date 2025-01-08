import Brush from '../assets/feedback/Brush.png'
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow custom-prev bottom-[-40px] md:bottom-0 right-[100px]"
            onClick={onClick}
            style={{
                position: "absolute",
                transform: "translateY(-50%)",
                zIndex: 2,
                color: "#4F5DE4",
                backgroundColor: "#F1F2FD",
                fontSize: "24px",
                cursor: "pointer",
                padding: '18px 17px 19px 17px',
                borderRadius: '50%'
            }}
        >
            <FaArrowLeft />
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-arrow custom-next bottom-[-40px] md:bottom-0 right-[10px]"
            onClick={onClick}
            style={{
                position: "absolute",
                transform: "translateY(-50%)",
                zIndex: 2,
                color: "#4F5DE4",
                backgroundColor: "#F1F2FD",
                fontSize: "24px",
                cursor: "pointer",
                padding: '18px 17px 19px 17px',
                borderRadius: '50%'
            }}
        >
            <FaArrowRight />
        </div>
    );
};

const Feedback = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    return (
        <section className="pt-[80px] lg:pb-[220px] pb-[80px]">
            <div className="container font-urbanist font-normal overflow-visible">
                <div className="text-center">
                    <p className="font-bold text-[24px] text-4F5DE4">
                        Testimonial
                    </p>
                    <h3 className="font-bold text-[40px] text-2A254D">
                        What Our Student Feedback
                    </h3>
                </div>
                <div className="border-[1px] bg-white rounded-2xl shadow-xl mt-[100px] relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 relative">
                        <Slider {...settings}>
                            <div className="p-[30px]">
                                <div className="w-[100px] h-[100px] bg-2A254D rounded-full absolute top-0"></div>
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
                            <div className="p-[30px]">
                                <div className="w-[100px] h-[100px] bg-2A254D rounded-full absolute top-0"></div>
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
                        </Slider>
                    </div>
                    <div className="bg-[url('././assets/feedback/Shape.png')] bg-cover bg-no-repeat lg:absolute right-0 top-[-35%] w-[330px] md:w-[610px] h-[305px] md:h-[562px] mb-[50px] md:mb-0">
                        <div className="w-[200px] md:w-[470px] h-[200px] md:h-[470px] bg-2A254D rounded-full mt-[50px] md:ml-[80px] mx-auto relative">
                            <img src={Brush} alt="" className='absolute right-[-13%] w-[50%] top-[-12%]' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback
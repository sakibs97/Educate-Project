import analysis from '../assets/favorite/Analysis.png'
import science from '../assets/favorite/data-science.png'
import marketing from '../assets/favorite/Digital-marketing.png'
import business from '../assets/favorite/business.png'
import Slider from "react-slick";

const Favorite = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    let favoriteData = [
        {
            img: analysis,
            title: 'Business Analysis',
            desc: '8 Courses',
            link: '',
        },
        {
            img: science,
            title: 'Data Science',
            desc: '6 Courses',
            link: '',
        },
        {
            img: marketing,
            title: 'Digital Marketing',
            desc: '5 Courses',
            link: '',
        },
        {
            img: business,
            title: 'Business Ideas',
            desc: '9 Courses',
            link: '',
        },

    ];


    return (
        <section className='relative after:absolute after:bg-[url("././assets/favorite/fav-bg.png")] after:bg-no-repeat after:bg-center after:bg-cover after:left-0 after:top-0 after:w-full after:h-full md:after:h-[443px] after:-z-10'>
            <div className="container py-[80px]">
                <div className="text-center pb-[50px]">
                    <p className="font-urbanist font-bold text-[24px] text-4F5DE4 leading-[26px]">Category</p>
                    <h3 className="font-urbanist font-bold text-[40px] text-[#2A254D]">
                        Favorite Topics To Learn
                    </h3>
                </div>
                <Slider {...settings}>
                    {favoriteData.map((data, index) => (
                        <div key={index} className="p-[18px]">
                            <div className="h-[376px] bg-[#2A254D] rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative overflow-hidden group cursor-pointer">
                                <span className="bg-white h-[300px] w-[450px] absolute bottom-[-110px] left-[-50px] rounded-tr-full rotate-[-50deg]"></span>
                                <div className="group-hover:absolute group-hover:bottom-[50%] group-hover:left-0 group-hover:translate-y-[50%]  group-hover:w-full group-hover:h-full group-hover:bg-[#1E1F25] duration-500 ease-in-out transition-all">
                                    <div className="absolute bottom-[50%] left-[50%] translate-y-[50%] translate-x-[-50%] ">
                                        <div className="py-[25px] pr-[22px] pl-[28px] bg-F57005 group-hover:bg-4F5DE4 rounded-full relative overflow-hidden">
                                            <img src={data.img} alt="analysis" />
                                            <span className="absolute bottom-[-53px] left-[-15px] w-[200px] h-[100px] transition-all duration-300 ease-out transform  translate-x-1 bg-[#F6F5F5] opacity-35 rounded-full group-hover:translate-x-0"></span>
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-[50%] translate-x-[-50%] pb-[40px]">
                                        <h6 className='font-urbanist font-bold text-[20px] text-[#2A254D] leading-[26px] pb-[15px] text-center group-hover:text-white'>{data.title}</h6>
                                        <p className='font-urbanist font-normal text-[20px] text-F57005 leading-[26px] text-center group-hover:text-white'>{data.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="after:absolute after:bottom-[38px] after:left-[25%] after:w-[318px] after:h-[3px] after:bg-[#F1F2FD] after:-z-10 before:absolute before:bottom-[38px] before:right-[25%] before:w-[318px] before:h-[3px] before:bg-[#F1F2FD] before:-z-10 hidden lg:block"></div>
            </div>
        </section>
    )
}

export default Favorite
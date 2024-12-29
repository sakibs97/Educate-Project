import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Featured = () => {

    let featuredData = [
        {
            image: 'Guy',
            time: '20 Hours',
            title: 'Management Consultants in Competitive Markets',
            name: 'Guy Hawkins',
            post: 'Project Manager',
            price: '$473.00',
            lessons: '15 Lessons'
        },
        {
            image: 'Guy',
            time: '40 Hours',
            title: 'The Ultimate Developer Course For Future Learner',
            name: 'Devon Lane',
            post: 'ROR Developer',
            price: '$943.00',
            lessons: '10 Lessons'
        },
        {
            image: 'Guy',
            time: '13 Hours',
            title: 'The Special HTML & CSS Bootcamp Edition ',
            name: 'Darrell Steward',
            post: 'Fronted Developer',
            price: '$767.00',
            lessons: '13 Lessons'
        },
        {
            image: 'Guy',
            time: '25 Hours',
            title: 'Building Responsive User Interfaces to Implementing Server-side',
            name: 'Jane Cooper',
            post: 'React JS Developer',
            price: '$739.65',
            lessons: '15 Lessons'
        },
        {
            image: 'Guy',
            time: '12 Hours',
            title: 'Mastering Financial Management Strategies for Success',
            name: 'Wade Warren',
            post: 'Finance',
            price: '$351.02',
            lessons: '13 Lessons'
        },
        {
            image: 'Guy',
            time: '33 Hours',
            title: 'The Special HTML & CSS Bootcamp Edition',
            name: 'Guy Hawkins',
            post: 'Chief Executive Officer',
            price: '$475.22',
            lessons: '13 Lessons'
        },
    ]

    return (
        <section className="py-[80px] bg-[#F1F2FD] relative ">
            <span className="bg-[url('././assets/featured/feature-after-bg.png')] bg-no-repeat bg-cover bg-center absolute top-0 left-0 w-full h-full "></span>
            <div className="container">
                <div className="text-center pb-[50px]">
                    <p className="font-urbanist font-bold text-[24px] text-4F5DE4 leading-[26px]">Best Course</p>
                    <h3 className="font-urbanist font-bold text-[40px] text-[#2A254D]">
                        Featured Course On This Month
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
                    {featuredData.map((data, index) => (
                        <div key={index} className="relative lg:h-[435px] group">
                            <div className="md:p-[30px] p-[15px] lg:mt-[100px] md:mt-[80px] mt-[50px] rounded-lg shadow-[rgba(0,0,0,0.24) 0px 3px 8px] bg-white group-hover:ring-1 group-hover:ring-4F5DE4 cursor-pointer shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                                <a href="#" className="font-urbanist font-semibold text-[14px] text-[#FFFFFF] leading-[26px] py-[7px] px-[10px] bg-4F5DE4">
                                    {data.time}
                                </a>
                                <div className="flex items-center gap-[2px] text-F57005 md:pt-[30px] pt-[15px] md:pb-[20px] pb-[15px]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <p className="font-urbanist font-normal text-[14px] text-2A254D leading-[26px] pl-[2px]">(25 Reviews)</p>
                                </div>
                                <h4 className="font-urbanist font-bold text-[20px] text-[#2A254D] leading-[29px] md:pb-[30px] pb-[15px] w-[90%]">
                                    {data.title}
                                </h4>
                                <div className="flex items-center justify-between lg:py-[12px] py-[10px] lg:px-[18px] px-[10px] bg-[#F1F2FD] rounded-lg">
                                    <div className="flex items-center">
                                        <div className="w-[44px] h-[44px] bg-152B4A rounded-full"></div>
                                        <div className="pl-[10px]">
                                            <h6 className="font-urbanist font-bold text-[16px] text-2A254D leading-[26px]">
                                                {data.name}
                                            </h6>
                                            <p className="font-urbanist font-medium text-[12px] text-[#697585] leading-[25px] uppercase">
                                                {data.post}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <p className="font-urbanist font-bold text-[20px] text-4F5DE4 leading-[26px]">
                                            {data.price}
                                        </p>
                                        <p className="font-urbanist font-medium text-[14px] text-F57005 leading-[26px] uppercase">
                                            {data.lessons}
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:w-[246px] md:w-[160px] w-[100px] lg:h-[247.77px] md:h-[160px] h-[101px] bg-gradient-to-br from-[#E4E4E4] to-[rgb(255,255,255,0%)] rounded-full flex items-center justify-center absolute lg:top-[-20px] md:top-[10px] top-0 right-0">
                                    <div className="lg:w-[225.35px] md:w-[140px] w-[80px] lg:h-[226.97px] md:h-[141px] h-[80px] bg-2A254D rounded-full"></div>
                                    <div className="absolute top-[15%] left-0 bg-F57005 group-hover:bg-4F5DE4 md:p-[12px] p-[7px] rounded-full text-white">
                                        <FaRegHeart className="w-[20px] h-[20px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Featured
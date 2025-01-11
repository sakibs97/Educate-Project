import { MdKeyboardArrowRight } from "react-icons/md";
import vision from '../../assets/About-Part/AboutUs-top/vision.png'
import target from '../../assets/About-Part/AboutUs-top/target.png'

const AboutUSTop = () => {
    return (
        <section className="py-[80px]">
            <div className="container font-urbanist font-normal">
                <div className="grid grid-col-1 md:grid-cols-2">
                    <div className="w-[451px] h-[651px] bg-152B4A ml-[210px] rounded-full relative">
                        <div className="w-[315px] h-[450px] bg-white rounded-full absolute left-[-203px] bottom-0">
                            <div className="bg-152B4A w-[305px] h-[440px] rounded-full"></div>
                        </div>
                        <div className="">

                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center">
                            <h6 className="font-bold text-[24px] leading-[26px] text-4F5DE4 pr-[15px]">
                                About Us
                            </h6>
                            <span className="flex items-center text-F57005">
                                <MdKeyboardArrowRight />
                                <MdKeyboardArrowRight />
                                <MdKeyboardArrowRight />
                                <MdKeyboardArrowRight />
                            </span>
                        </div>
                        <h3 className="font-bold text-[40px] text-2A254D leading-[47px] py-[30px]">
                            Establishing a community that encourages lifelong learning
                        </h3>
                        <p className="font-semibold text-[16px] text-[#697585] leading-[25px] py-[10px]">
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition
                        </p>
                        <div className="flex items-center py-[10px]">
                            <img src={target} alt="target" />
                            <h4 className="font-bold text-[32px] text-2A254D leading-[26px] pl-[30px]">
                                Our Mission
                            </h4>
                        </div>
                        <p className="font-semibold text-[16px] text-[#697585] leading-[25px] py-[10px]">
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition
                        </p>
                        <div className="flex items-center py-[10px]">
                            <img src={vision} alt="vision" />
                            <h4 className="font-bold text-[32px] text-2A254D leading-[26px] pl-[30px]">
                                Our Vision
                            </h4>
                        </div>
                        <p className="font-semibold text-[16px] text-[#697585] leading-[25px] py-[10px]">
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUSTop
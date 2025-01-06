import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const TeamMembers = () => {

    const teamMembers = [
        {
            title: "John Doe",
            position: "Web Developer",
        },
        {
            title: "Devon Lane",
            position: "UI/UX Designer",
        },
        {
            title: "John Leo",
            position: "Web Developer",
        },
    ];

    return (
        <section className="bg-[#F1F2FD] bg-[url('././assets/team-member/team-banner.png')] bg-no-repeat bg-cover bg-center">
            <div className="container py-[80px] lg:px-[80px] font-urbanist font-normal">
                <div className="text-center">
                    <p className="font-bold text-[24px] text-4F5DE4">
                        Team Member
                    </p>
                    <h3 className="font-bold text-[40px] text-2A254D">
                        Meet Our Professional Team Members
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[100px] gap-[50px] mt-[60px] z-0">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative z-50 group cursor-pointer my-[20px]"
                        >
                            <span className="absolute left-[-13px] top-[-17px] w-[170px] h-[199px] bg-4F5DE4 group-hover:bg-F57005 duration-500 ease-in-out rounded-2xl -z-20"></span>
                            <div className=" h-[480px] bg-152B4A group-hover:bg-[#2A254D] rounded-2xl z-50 text-center items-center justify-center flex">
                                <div className="hidden group-hover:block text-white">
                                    <h4 className="text-[32px] font-bold leading-[39.7px]">{member.title}</h4>
                                    <p className="text-[20px] leading-[38.1px]">{member.position}</p>
                                    <div className="flex gap-[12px] justify-center mt-[30px]">
                                        <span className="p-[5px] border-[2px] border-4F5DE4 rounded-full">
                                            <FaFacebookF className="w-[20px] h-[18px]" /></span>
                                        <span className="p-[8px] border-[2px] border-4F5DE4 rounded-full">
                                            <FaLinkedinIn className="w-[14px] h-[14px]" /></span>
                                        <span className="p-[6px] border-[2px] border-4F5DE4 rounded-full">
                                            <FaYoutube className="w-[18px] h-[18px]" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    );
};

export default TeamMembers;

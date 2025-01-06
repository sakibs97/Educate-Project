import Newsletter from "../assets/blog/newsletter.png";

const LatestBlog = () => {

    let blogData = [
        {
            id: 1,
            image: "blog-1.png",
            category: "Development",
            title: "The Complete Web Developer Guideline 2023",
            userImage: "user-1.png",
            name: "Darrell Steward",
            post: "Fronted Developer",
            date: "26 Mar, 2023",
        },
        {
            id: 2,
            image: "blog-1.png",
            category: "Advise",
            title: "The generated orem Ipsum is there fore always free from",
            userImage: "user-1.png",
            name: "Wade Warren",
            post: "Advisor",
            date: "28 Mar, 2023",
        },
    ]

    return (
        <section className="py-[80px]">
            <div className="container font-urbanist font-normal">
                <div className="text-center">
                    <p className="font-bold text-[24px] text-4F5DE4">
                        Latest Blog
                    </p>
                    <h3 className="font-bold text-[40px] text-2A254D">
                        Latest Updates & Articles
                    </h3>
                </div>
                <div className="flex justify-center items-center gap-8">
                    <div className="">
                        {blogData.map((blog, index) => (
                            <div key={index} className="flex items-center my-[36px] shadow-xl rounded-xl h-[400px]">
                                <div className="bg-2A254D h-full w-[350px] rounded-l-xl"></div>
                                <div className="w-[450px] py-[35px] px-[30px]">
                                    <span className="py-[7px] px-[10px] bg-4F5DE4 rounded-lg font-semibold text-[14px] text-white leading-[26px]">{blog.category}</span>
                                    <h3 className="py-[30px] font-bold text-[40px] text-2A254D">{blog.title}</h3>
                                    <div className="flex items-center justify-between py-[12px] px-[20px] bg-[#F1F2FD] rounded-lg">
                                        <div className="flex items-center gap-4">
                                            <div className="w-[44px] h-[44px] bg-2A254D rounded-full">
                                                <img src="" alt="" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-[16px] text-2A254D leading-[26px]">{blog.name}</p>
                                                <p className="font-medium text-[12px] text-[#697585] leading-[25px] uppercase">{blog.post}</p>
                                            </div>
                                        </div>
                                        <p className="font-semibold text-[16px] text-F57005 leading-[26px]">{blog.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-2A254D w-[452px] text-white rounded-xl text-center p-[50px] relative z-50">
                        <div className="bg-[url('././assets/blog/01.png')] bg-no-repeat bg-bottom absolute bottom-0 left-0 w-full h-full -z-10"></div>
                        <div className="mx-auto py-[120px]">
                            <div className="py-[25px] px-[28px] bg-[rgb(79,93,228,44%)] rounded-full w-[100px] mx-auto">
                                <img src={Newsletter} alt="" />
                            </div>
                            <h6 className="w-[307px] mx-auto font-bold text-[32px] pt-[40px]">Subscribe to our newsletter for daily updates</h6>
                        </div>
                        <div className="z-30">
                            <input type="email" name="" id="" placeholder="Email Address" className="py-[22.5px] px-[24px] rounded-lg w-full" />
                            <button type="button" className="font-bold text-[18px] py-[21.5px] w-full rounded-lg bg-4F5DE4 mt-[12px] mb-[20px]">Subscribe</button>
                            <p className="text-[18px]">Get Latest News and keep Update</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default LatestBlog
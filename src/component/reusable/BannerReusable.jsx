import { Link } from "react-router-dom"


const BannerReusable = ({ title }) => {
    return (
        <section className="py-[50px] bg-4F5DE4 relative font-urbanist font-normal text-white z-30">
            <div className="absolute right-0 top-0 w-full h-full bg-[url('./././assets/all-banner.png')] bg-no-repeat bg-center bg-cover -z-10"></div>
            <div className="container py-[100px] text-center">
                <h2 className="font-bold text-[50px] leading-[47px]">{title}</h2>
                <div className="text-[20px] leading-[47px]">
                    <span>
                        <Link to='/'>
                            Home
                        </Link>
                    </span>
                    <span className="px-2">
                        /
                    </span>
                    <span>
                        {title}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default BannerReusable
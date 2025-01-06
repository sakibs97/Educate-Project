import Frame from '../assets/skill-cta/Frame.png'

const SkillsCertificate = () => {
    return (
        <section className="py-[80px]">
            <div className="container bg-4F5DE4 relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:bg-[url('./src/assets/skill-cta/CTA.png')] after:bg-no-repeat after:bg-center after:bg-cover text-white">
                <div className="grid grid-cols-3 items-center">
                    <div className="">
                        <h2 className="text-4xl font-bold">Skills Certificate</h2>
                        <p className="text-[16px] mt-[20px]"></p>
                    </div>
                    <div className="">
                        <img src={Frame} alt="" />
                    </div>
                    <div className="bg-2A254D w-[460px] h-[461px] rounded-full"></div>
                </div>
            </div>
        </section>
    )
}

export default SkillsCertificate
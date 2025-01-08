import Banner from '../component/Banner'
import About from '../component/About'
import Favorite from '../component/Favorite'
import Featured from '../component/Featured'
import FreeAccount from '../component/FreeAccount'
import Feedback from '../component/Feedback'
import TeamMembers from '../component/TeamMembers'
import LatestBlog from '../component/LatestBlog'
import SkillsCertificate from '../component/SkillsCertificate'


const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Favorite />
            <Featured />
            <FreeAccount />
            <Feedback />
            <TeamMembers />
            <LatestBlog />
            <SkillsCertificate />

        </>
    )
}

export default Home
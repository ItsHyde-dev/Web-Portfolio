import Navbar from "../navbar/navbar"
import styles from "./about-page.module.css"
import animation from '../../common/styles/animations.module.css'
import commonStyles from '../../common/styles/css-components.module.css'


function AboutPage() {
    return (
        <>
            <Navbar highlight="about" />
            <div>About Me</div>
            <p>I have been programming for roughly 6 years. These years have taught me much about how to code solutions to a problem.</p>
            <p>Hi! I am Himanshu Joshi <br/>I am a passionate software developer with a bachelor degree in Information Technology and an out of the box approach</p>
            <p>I have a track record of delivering high-quality code in a fast-paced environment</p>
        </>
    )
}

export default AboutPage

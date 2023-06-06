import Navbar from "../navbar/navbar"
import styles from "./about-page.module.css"
import animation from '../../common/styles/animations.module.css'
import commonStyles from '../../common/styles/css-components.module.css'


function AboutPage() {
    return (
        <>
            <Navbar highlight="about" />
            <h1 className={styles.heading}>About Me</h1>
            <div className={styles.intro_para}>Hello, I'm <b> Himanshu Joshi</b>, a passionate software engineer with a love for logical thinking and crafting optimized solutions to programming challenges. <br />
                With over 6 years of experience in software development, I bring a diverse skill set that spans multiple programming languages, frameworks, and technologies. <br />
                I thrive on the thrill of solving complex problems and take pride in engineering efficient and scalable solutions. <br />
                Through my dedication to continuous learning, I stay up-to-date with the latest industry trends and best practices. <br />
                Welcome to my personal website, where you'll get a glimpse into my journey as a software engineer and the exciting projects I've had the privilege to work on.</div>
        </>
    )
}

export default AboutPage

import Navbar from "../navbar/navbar"
import styles from "./about-page.module.css"
import animation from '../../common/styles/animations.module.css'
import commonStyles from '../../common/styles/css-components.module.css'
import { ReactNode } from "react"

function AboutPage() {

    const expandingLine = commonStyles.ehl + ' ' + animation.expand_from_center

    return (
        <>
            <Navbar highlight="about" />
            <h1 className={styles.heading}>Himanshu Joshi</h1>
            <div className={expandingLine} />
            <div className={styles.body_area}>
                <div className={styles.left_area}>
                    <LeftArea />
                </div>
                <div className={styles.right_area}><RightArea /></div>
            </div>
        </>
    )
}

function LeftArea() {
    return (
        <>
            <h2 style={{ paddingLeft: "2rem" }}>About Me</h2>
            <div className={styles.intro_para}>I am a passionate software engineer with a love for logical thinking and crafting optimized solutions to programming challenges. <br />
                With over 6 years of experience in software development, I bring a diverse skill set that spans multiple programming languages, frameworks, and technologies. <br />
                I thrive on the thrill of solving complex problems and take pride in engineering efficient and scalable solutions. <br />
                Through my dedication to continuous learning, I stay up-to-date with the latest industry trends and best practices. <br />
                Welcome to my personal website, where you'll get a glimpse into my journey as a software engineer and the exciting projects I've had the privilege to work on.</div>

            <div className={styles.bubble}>
                <h4>What's my stack? </h4>
                <div className={styles.stack_grid}>
                    <FrontEnd />
                    <BackEnd />
                    <General />
                </div>
                <div> I have also experimented with languages like C, C++, C# and also built a few experimental apps with Kotlin and Swift. I haven't used them extensively but can pick them up fairly quickly if needed.</div>
            </div>

        </>
    )
}

function RightArea() {
    return (
        <>
            <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>From the developer</h2>
            <FTDArticleList />
        </>
    )
}

function FTDArticleList() {

    const articleList = [
        {
            title: "ReactJs",
            body: <div>
            I had a great time learning ReactJs in college since a friend told me about it.<br/>
            It was the first Javascript framework I learned and gave me a lot of trouble with state at first but eventually I got the hang of it.<br/>
            It has come a long way with functional components since I started and I have kept up with the new changes in the framework and also Javascript in general.
            </div>
        }
    ]

    return (
        <div className={styles.bubble}>
            {
                articleList.map(({ title, body }: { title: string, body: ReactNode }) => (
                    FTDArticle(title, body)
                ))
            }
        </div>
    )
}

function FTDArticle(heading: string, body: ReactNode) {
    const expandingLine = commonStyles.ehl + ' ' + animation.expand_from_center
    return (
        <div className={styles.ftd_article_container}>
            <div className={styles.ftd_artice_heading}>
                {heading}
            </div>
            <div className={expandingLine} />
            <div className={styles.ftd_article_body}>
                {body}
            </div>
        </div>
    )
}

function FrontEnd() {

    const children = [
        "HTML | Experience 6 years",
        "CSS | Experience 6 years",
        "JavaScript | Experience: 5 years",
        "React | Experience 4 years",
        "Flutter | Experience 3 years",
    ]

    return StackTemplate({
        title: "Front End",
        children
    })
}

function BackEnd() {

    const children: string[] = [
        "Node.js | Experience: 4 years",
        "Go | Experience: 2 years",
    ]

    return StackTemplate({
        title: "Back End",
        children
    })
}

function General() {
    const children: string[] = [
        "Python | Experience: 6 years",
        "Java | Experience: 4 years",
        "JavaScript | Experience: 6 years",
        "TypeScript | Experience: 4 years",
        "Dart | Experience: 3 years",
        "Go | Experience: 2 years",
        "Rust | Experience: 1 years",
    ]

    return StackTemplate({
        title: "General",
        children
    })
}

function StackTemplate({ title, children }: { title: string, children: string[] }) {
    return (
        <ul className={styles.stack_list}>
            <b className={styles.stack_title}>{title}</b>
            {
                children.map(child => <li key={child}>{child}</li>)
            }
        </ul>
    )
}

export default AboutPage

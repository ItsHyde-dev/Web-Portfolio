import Navbar from "../navbar/navbar"
import styles from "./about-page.module.css"
import animation from '../../common/styles/animations.module.css'
import position from '../../common/styles/positioning.module.css'
import commonStyles from '../../common/styles/css-components.module.css'
import { ReactNode } from "react"
import { FaDownload } from "react-icons/fa"

function AboutPage() {

    const expandingLine = commonStyles.ehl + ' ' + animation.expand_from_center

    return (
        <>
            <Navbar highlight="about" />

            <div className={styles.header_container}>
                <h1 className={styles.heading}>Himanshu Joshi
                </h1>
                <a
                    href={require("../../assets/Resume-Himanshu Joshi.pdf")}
                    download="Resume-Himanshu Joshi.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    Resume <FaDownload />
                </a>
            </div>
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
            <div className={styles.intro_para}>
                <ul>
                    <li>
                        I am a passionate software engineer with a love for logical thinking and crafting optimized solutions to programming challenges.
                    </li>
                    <li>
                        With over 6 years of experience in software development, I bring a diverse skill set that spans multiple programming languages, frameworks, and technologies.
                    </li>
                    <li>
                        I thrive on the thrill of solving complex problems and take pride in engineering efficient and scalable solutions.
                    </li>
                    <li>
                        Through my dedication to continuous learning, I stay up-to-date with the latest industry trends and best practices.
                    </li>
                    <li>
                        Welcome to my personal website, where you'll get a glimpse into my journey as a software engineer and the exciting projects I've had the privilege to work on.
                    </li>
                </ul>
            </div>

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
            <h2 className={styles.right_area_header}>From the developer</h2>
            <FTDArticleList />
        </>
    )
}

function FTDArticleList() {

    const articleList = [
        {
            title: "This Website!",
            body: <div>
                <p>
                    This website is made with ReactJs and Typescript. All the animations and transitions are purely made using css (css modules to be more precise). This was a conscious choice as I wanted to practice and highlight my proficiency with vanilla html and css.
                </p>
                <p>
                    I did use some react features like useState and useRef to make it a bit more responsive and plan to expand the site using more React functionalities.
                </p>
                <p>
                    This website also has demos for some other projects that I have made in my free time to demonstrate how some of them work. So do check them out in the projects section!
                </p>
            </div>
        },
        {
            title: "ReactJs",
            body: <div>
                <p>
                    I had a great time learning ReactJs in college since a friend told me about it!</p>
                <p>
                    It was the first Javascript framework I learned and gave me a lot of trouble with state at first but eventually I got the hang of it.</p>
                <p>
                    It has come a long way with functional components since I started and I have kept up with the new changes in the framework and also Javascript in general.
                </p>
            </div>
        },
        {
            title: "Rust",
            body: <div>
                <p>
                    My journey with rust started recently as I was looking for a new language to refresh my mind.
                </p>
                <p>
                    I was interested to learn it since it was the most loved language according to stack overflow.
                </p>
                <p>
                    It took me a little while to understand the concepts but in the end it helped me understand low level programming concepts and helped improve my understanding of coding in general.
                </p>
                <p>
                    It is an amazing language with a lot to offer to those who take the time to understand it (me). It does leave you wishing that other languages had these features.
                </p>
            </div>
        },
        {
            title: "Flutter",
            body: <div>
                <p>
                    Flutter was my go to framework for making any kind of front end for about 2 years from 2020 to 2022
                </p>
                <p>
                    It is really intuitive and after spending some time with it I feel pretty confident in making applications for any device with it.
                </p>
                <p>
                    Infact one of the projects listed on the project page (Helix) has been my go to application for writing some songs in my free time.
                    I made it tailored to my own requirements using flutter and firebase.
                </p>
            </div>
        },
        {
            title: "ChatGPT",
            body: <div>
                <p>
                    I don't really use it since it's launch. But I see the potential.
                </p>
                <p>
                    Maybe after it matures a little it will be more useful to my work.
                </p>
            </div>
        },
        {
            title: "Future Scope",
            body: <div>
                <p>
                    Adding more cool features to this website and maybe making a dedicated backend just for this website will be coming in the future.
                </p>
                <p>
                    I might use this website as an outlet for my thoughts i.e. a blog section might come to the website.
                </p>
                <p>
                    A section for advice or a contact section where people can send me messages directly will be added.
                    Might configure an smtp server for that. Maybe it's already in the works 😉
                </p>
            </div>
        }
    ]

    return (
        <div className={styles.ftd_list_container}>
            <div className={styles.bubble}>
                <div className={styles.ftd_list_content}>
                    {
                        articleList.map(({ title, body }: { title: string, body: ReactNode }) => (
                            FTDArticle(title, body)
                        ))
                    }
                </div>
            </div>
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

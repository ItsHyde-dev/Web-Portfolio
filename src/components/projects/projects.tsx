import React from "react"
import Navbar from "../navbar/navbar"
import styles from "./projects.module.css"
import githubLogo from "../../assets/github-mark-white.svg"
import codeLogo from "../../assets/transparent-code-logo.png"
import { useNavigate } from "react-router-dom"
import ProjectList from "./projectList"
import position from "../../common/styles/positioning.module.css"
import animation from "../../common/styles/animations.module.css"

var githubUrls: { [key: string]: string } = {
    "user authentication api": "https://github.com/ItsHyde-dev/NodeJs_Rest_API_Example",
    "bevy-game-1": "https://github.com/ItsHyde-dev/Pirates-Game-Rust",
    "golang-rest-api": "https://github.com/ItsHyde-dev/go_rest_api",
    "helix": "https://github.com/ItsHyde-dev/Helix"
}

export default function ProjectPage() {
    return (
        <>
            <Navbar />
            <div className={styles.page_heading}>My Projects</div>
            <div className={`
                ${styles.divider}
                ${animation.expand_from_center}
            `} />
            <ProjectGrid />
        </>
    )
}

function ProjectGrid() {
    return (
        <ul className={styles.project_headings}>
            {
                <ProjectBuilder projects={ProjectList} />
            }
        </ul>
    )
}

function ProjectBuilder(props: { projects: {}[] }) {
    return (
        <>
            {
                props.projects.map((project: any) => {
                    return (
                        <ProjectRow
                            title={project.title}
                            summary={project.summary}
                            projectName={project.projectName}
                            codeUrl={project.codeUrl}
                            technologies={project.technologies}
                        />
                    )
                })
            }
        </>
    )
}

function ProjectRow(props: any) {

    const navigate = useNavigate();

    return (
        <li>
            <div className={styles.project_row}>
                <div className={styles.project_info_column}>
                    <div>{props.title}</div>
                    <div className={styles.project_summary}>{props.summary}</div>
                    <div className={styles.project_technologies_header}>Technologies Used:  </div>
                    {
                        (props.technologies && props.technologies.length > 0) &&
                        showTechnologies(props.technologies)
                    }
                </div>


                <img src={githubLogo} className={styles.logos} onClick={() => openGithub(props.projectName)} />
                <img src={codeLogo} className={styles.logos} onClick={() => navigate(props.codeUrl)}></img>
            </div>
        </li>
    )
}

function openGithub(projectName: string) {
    window.open(githubUrls[projectName])
}

function showTechnologies(technologies: { [key: string]: any }[]) {
    return (
        <div className={position.row}>
            {
                technologies.map((technology: { [key: string]: any }) => {

                    return (
                        <div className={styles.tech_logos_container} data-tooltip={technology.hover} >
                            <img
                                src={technology.logo}
                                className={styles.tech_logos} />
                        </div>
                    )
                })
            }
        </div>
    )
}




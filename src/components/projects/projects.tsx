import React from "react"
import Navbar from "../navbar/navbar"
import styles from "./projects.module.css"
import position from "../../common/styles/positioning.module.css"
import animation from "../../common/styles/animations.module.css"

export default function ProjectPage() {
    return (
        <>
            <Navbar />
            <ProjectGrid />
        </>
    )
}

function ProjectGrid() {
    return (
        <div>
            <div className={`
                ${position.vertical_center}
                ${styles.page_heading}
            `}>Projects</div>
            <div className={position.vertical_center}>
                <div className={`
            ${styles.divider}
            ${animation.expand_from_center}
            `} />
            </div>
            <div className={`
            ${styles.header_line}
            ${animation.slide_in_left_small}
            `}>
                NodeJs
            </div>

            <NodeJsProjects />

        </div>
    )
}

function NodeJsProjects() {

    const test_code_logo = "</>";

    return (
        <div className={styles.project_headings}>
            <div className={styles.project_title_row}>
                <div className={styles.project_title_and_summary}>
                    <div>User Authentication API</div>
                    <div className={styles.project_summary}>JWT authentication implemented using NodeJS, Express and MongoDb</div>
                </div>

                <div className={styles.github_logo}>GitHub Logo</div>
                <div className={styles.test_code_logo}>{test_code_logo}</div>

            </div>
        </div>
    )
}

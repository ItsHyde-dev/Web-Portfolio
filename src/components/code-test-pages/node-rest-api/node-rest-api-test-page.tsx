import React from 'react';
import Navbar from '../../navbar/navbar';
import styles from './node-rest-api-test.module.css'
import animation from '../../../common/styles/animations.module.css'
import position from '../../../common/styles/positioning.module.css'
import techMap from '../../projects/techMap'
import logoStyles from '../../../common/styles/logo.module.css'

export default function NodeRestApiTestPage() {

    const technologies = [techMap.node, techMap.mongodb, techMap.express, techMap.js]
    return (
        <div>
            <Navbar highlight="projects" />
            <div className={`
                ${styles.title}
                ${animation.slide_in_bottom}
            `}>User Authentication Demo - <div className={styles.green}>NodeJs</div></div>

            <div className={styles.logo_container}>
                {
                    technologies.map(tech => {
                        return <div className={logoStyles.tech_logos_container} data-tooltip={tech.hover}>
                            <img src={tech.logo} className={logoStyles.tech_logos} />
                        </div>
                    })
                }
            </div>

            <div className={`
                ${styles.expanding_divider}
                ${position.vertical_center}
                ${animation.expand_from_center}
            `} />

            <div className={styles.heading_container}>
                <div className={`
                    ${styles.heading}
                    ${animation.slide_in_left_small}
                `}>Hey!</div>
                <div className={`
                    ${styles.heading}
                    ${styles.delay_subtext}
                    ${animation.slide_in_left_small}
                `}>Let's Test out how this works!</div>
            </div>

            <section className={styles.test_area}>
               <ul className={styles.step_list}>
                   <li>NodeJs</li>
                   <li>MongoDB</li>
               </ul>
            </section>
        </div>
    )
}

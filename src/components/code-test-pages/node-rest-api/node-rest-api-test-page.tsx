import React from 'react';
import Navbar from '../../navbar/navbar';
import styles from './node-rest-api-test.module.css'
import animation from '../../../common/styles/animations.module.css'
import position from '../../../common/styles/positioning.module.css'
import techMap from '../../projects/techMap'
import logoStyles from '../../../common/styles/logo.module.css'
import areas from './sample-code-areas';

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

                {
                    areas.map(area => {
                        return connectedUl({ element: area })
                    })
                }

            </section>
        </div>
    )
}

function connectedUl({ element }: { element: any }) {
    return (
        <div className={styles.connected_ul_li_container}>
            <div className={styles.connected_ul_bullet} >
                <div className={styles.connected_ul_bullet_marker} />
            </div>
            <div className={styles.connected_ul_li}>{element}</div>
        </div>
    )
}

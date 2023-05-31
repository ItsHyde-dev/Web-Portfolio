import Navbar from "../../../navbar/navbar";
import styles from '../test-page-common-styles.module.css'
import animation from '../../../../common/styles/animations.module.css'
import logoStyles from '../../../../common/styles/logo.module.css'
import position from '../../../../common/styles/positioning.module.css'
import ConnectedUl from "./connected_ul_object";
import { ToastContainer } from "react-toastify";
import { ReactNode } from "react";
import 'react-toastify/dist/ReactToastify.css';

export default function RestApiUserAuthTestPageTemplate(technologies: any[], areas: ReactNode[], headerTechName: any) {
    return (
        <div>
            <Navbar highlight="projects" />
            <div className={`
                ${styles.title}
                ${animation.slide_in_bottom}
            `}>User Authentication Demo - {headerTechName}</div>

            <div className={styles.logo_container}>
                {
                    technologies.map(tech => {
                        return <div className={logoStyles.tech_logos_container} data-tooltip={tech.hover} key={tech.hover}>
                            <img src={tech.logo} className={logoStyles.tech_logos} alt={tech.hover} />
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
                    ConnectedUl(areas)
                }
            </section>

            <ToastContainer position="bottom-left" theme="dark" />
        </div>
    );
}

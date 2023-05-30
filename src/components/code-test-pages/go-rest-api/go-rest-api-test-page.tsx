import React from 'react'
import Navbar from '../../navbar/navbar'
import techMap from '../../projects/techMap'
import styles from './go-rest-api-test-page.module.css'
import logoStyles from '../../../common/styles/logo.module.css'

export default function GoRestApiTestPage() {

    const technologies = [techMap.go]

    return (
        <div>
            <Navbar highlight="projects" />
            <div className={styles.title}>User Authentication - <b>Go</b></div>
            <div className={styles.logo_container}>
                {
                    technologies.map(tech => {
                        return <div className={logoStyles.tech_logos_container} data-tooltip={tech.hover} key={tech.hover}>
                            <img src={tech.logo} className={logoStyles.tech_logos} alt={tech.hover} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

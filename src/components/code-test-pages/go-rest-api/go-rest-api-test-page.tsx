import Navbar from '../../navbar/navbar'
import techMap from '../../projects/techMap'
import logoStyles from '../../../common/styles/logo.module.css'
import commonStyles from '../common/test-page-common-styles.module.css'
import colors from '../../../common/styles/colors.module.css'

export default function GoRestApiTestPage() {

    const technologies = [techMap.go]

    return (
        <div>
            <Navbar highlight="projects" />
            <div className={commonStyles.title}>User Authentication - <b className={colors.baby_blue}>Go</b></div>
            <div className={commonStyles.logo_container}>
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

import Navbar from '../../navbar/navbar'
import techMap from '../../projects/techMap'
import logoStyles from '../../../common/styles/logo.module.css'
import commonStyles from '../common/test-page-common-styles.module.css'
import colors from '../../../common/styles/colors.module.css'
import RestApiUserAuthTestPageTemplate from '../common/components/rest-api-user-auth-test-page-template'
import LoginAreaGo from './login-area-go'

export default function GoRestApiTestPage() {

    const technologies = [techMap.go]
    const headerTechName = <b className={colors.baby_blue}>Go</b>

    const areas = [
        <LoginAreaGo />
    ]

    return RestApiUserAuthTestPageTemplate(technologies, areas, headerTechName  )
}

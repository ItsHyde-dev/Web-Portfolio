import techMap from '../../projects/techMap'
import colors from '../../../common/styles/colors.module.css'
import RestApiUserAuthTestPageTemplate from '../common/components/rest-api-user-auth-test-page-template'
import LoginAreaGo from './login-area-go'
import JwtAreaGo from './jwt-area-go'
import LogoutAreaGo from './logout-area-go'

export default function GoRestApiTestPage() {

    const technologies = [techMap.go]
    const headerTechName = <b className={colors.baby_blue}>Go</b>

    const areas = [
        <LoginAreaGo />,
        <JwtAreaGo />,
        <LogoutAreaGo />,
    ]

    return RestApiUserAuthTestPageTemplate(technologies, areas, headerTechName  )
}

import techMap from '../../projects/techMap'
import areas from './sample-code-areas';
import 'react-toastify/dist/ReactToastify.css';
import RestApiUserAuthTestPageTemplate from '../common/components/rest-api-user-auth-test-page-template';
import colors from '../../../common/styles/colors.module.css'
function NodeRestApiTestPage() {
    const technologies = [techMap.node, techMap.mongodb, techMap.express, techMap.js]
    const headerTechName = <b className={colors.limegreen}>NodeJS</b>
    return RestApiUserAuthTestPageTemplate(technologies, areas, headerTechName)
}

export default NodeRestApiTestPage;

import { useContext } from "react";
import { JwtProvider } from "../common/components/connected_ul_object";
import CommonListArea, { ListAreaTemplateProps } from "../common/components/list-area-template";
import colors from '../../../common/styles/colors.module.css'
import styles from '../common/test-page-common-styles.module.css'
import Fetch, { Post } from "../../../utils/helpers/fetchHelper";

const f = new Fetch()

export default function LogoutAreaGo() {

    const { jwt, setJwt } = useContext(JwtProvider)

    const introText = <div>For logging out the client sends a
        <b className={colors.baby_blue}> POST</b> request with the <b className={colors.baby_blue}>JWT</b> in the header</div>

    const rightBlockChildComponent = `{
            accesstoken: ${jwt}
        }`


    const leftBlockChildComponent = () => {

        const logout = async () => {
            const url = `${process.env.REACT_APP_GO_USER_AUTH_API_BASE_URL}/auth/logout`

            const params: Post = {
                url,
                headers: {
                    accesstoken: jwt
                },
                body: {}
            }

            const body = await f.post(params)
            if (body != null || body != undefined) {
                setJwt("")
            }
        }

        return (
            <div className={styles.container1}>
                <div>Are you sure you want to logout? </div>
                <button onClick={logout} className={`
                    ${styles.button2}
                `}>Logout</button>
            </div>
        )
    }

    const listAreaProps: ListAreaTemplateProps = {
        introText,
        title: "Logout",
        leftBlockTitle: null,
        rightBlockTitle: "Request Headers: ",
        leftBlockChildComponent: leftBlockChildComponent(),
        rightBlockChildComponent: rightBlockChildComponent
    }

    return CommonListArea(listAreaProps)

}


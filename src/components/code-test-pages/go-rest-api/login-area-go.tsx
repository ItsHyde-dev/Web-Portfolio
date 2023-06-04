import CommonListArea, { ListAreaTemplateProps } from "../common/components/list-area-template"
import colors from '../../../common/styles/colors.module.css'
import styles from '../common/test-page-common-styles.module.css'
import { BaseSyntheticEvent, useContext, useState } from "react";
import { JwtProvider } from "../common/components/connected_ul_object";
import Fetch from "../../../utils/helpers/fetchHelper";
import { toast } from "react-toastify";

const f = new Fetch()

export default function LoginAreaGo() {

    const [jsonStructure, setJsonStructure] = useState({
        email: '',
        password: ''
    });

    const emailHandler = (event: BaseSyntheticEvent) => {
        setJsonStructure({ ...jsonStructure, email: event.target.value });
    }

    const passwordHandler = (event: BaseSyntheticEvent) => {
        setJsonStructure({ ...jsonStructure, password: event.target.value });
    }

    const { setJwt } = useContext(JwtProvider)

    const login = async () => {
        const url = `${process.env.REACT_APP_GO_USER_AUTH_API_BASE_URL}/auth/login`
        const body = await f.post({ url, headers: null, body: jsonStructure })
        console.log({body})
        if (body && body.accessToken) {
            setJwt(body.accessToken)
        }
    }

    const signup = async () => {
        const url = `${process.env.REACT_APP_GO_USER_AUTH_API_BASE_URL}/auth/signup`
        const body = await f.post({ url, headers: null, body: jsonStructure })
        if (body) {
            toast.info("Please login to continue")
        }
    }

    const introText =
        <div> User Login and Signup is done using <b className={colors.baby_blue}>username</b> and < b className={colors.baby_blue} > password</b > <br />
            This generates a < b className={colors.baby_blue} > json web token</b > </div>

    const leftBlockChildComponent =
        <div>
            <div className={styles.block_h1}>Enter your Username / Email: </div>
            <input type="text" placeholder="username / email@xyz.com" onChange={emailHandler} className={styles.input} />
            <div className={styles.block_h1}>Enter your password: </div>
            <input type="password" placeholder="password" onChange={passwordHandler} className={styles.input} />

            <div className={styles.logo_container}>
                <button className={styles.button2} onClick={signup}>Sign up</button>
                <button className={styles.button2} onClick={login}>Login</button>
            </div>
        </div>


    const listAreaProps: ListAreaTemplateProps = {
        introText,
        title: "Signup / Login",
        leftBlockTitle: null,
        rightBlockTitle: "Request Body: ",
        leftBlockChildComponent,
        rightBlockChildComponent: JSON.stringify(jsonStructure, null, 6)
    }


    return CommonListArea(listAreaProps)
}

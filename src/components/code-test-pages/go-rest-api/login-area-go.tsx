import CommonListArea, { ListAreaTemplateProps } from "../common/components/list-area-template"
import colors from '../../../common/styles/colors.module.css'
import styles from '../node-rest-api/node-rest-api-test.module.css'
import { BaseSyntheticEvent, useContext, useState } from "react";
import { JwtProvider } from "../common/components/connected_ul_object";
import Fetch from "../../../utils/helpers/fetchHelper";

const f = new Fetch()


//TODO: Change the React api base url to separate node and go apis

export default function LoginAreaGo() {

    const [jsonStructure, setJsonStructure] = useState({
        username: '',
        password: ''
    });

    const usernameHandler = (event: BaseSyntheticEvent) => {
        setJsonStructure({ ...jsonStructure, username: event.target.value });
    }

    const passwordHandler = (event: BaseSyntheticEvent) => {
        setJsonStructure({ ...jsonStructure, password: event.target.value });
    }

    const { setJwt } = useContext(JwtProvider)

    const login = async () => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/user/login`
        const body = await f.post({ url, headers: null, body: jsonStructure })
        if (body && body.accessToken) {
            setJwt(body.accessToken)
        }
    }

    const signup = async () => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/user/createUser`
        const body = await f.post({ url, headers: null, body: jsonStructure })
        if (body && body.accessToken) {
            setJwt(body.accessToken)
        }
    }

    const introText =
        <div> User Login and Signup is done using <b className={colors.baby_blue}>username</b> and < b className={colors.baby_blue} > password</b > <br />
            This generates a < b className={colors.baby_blue} > json web token</b > </div>



    // TODO: change the signup and login button colors to baby_blue

    const leftBlockChildComponent =
        <div>
            <div className={styles.ia_header_1}>Enter your username: </div>
            <input type="text" placeholder="username" onChange={usernameHandler} className={styles.input} />
            <div className={`
                ${styles.ia_header_1}
                ${styles.pad_top}
                `}>Enter your password: </div>
            <input type="password" placeholder="password" onChange={passwordHandler} className={styles.input} />

            <div className={styles.signup_login_button_container}>
                <div className={styles.signup_button} onClick={signup}>Sign up</div>
                <div className={styles.signup_button} onClick={login}>Login</div>
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

import { BaseSyntheticEvent, useContext, useState } from 'react';
import { JwtProvider } from '../common/components/connected_ul_object';
import styles from './node-rest-api-test.module.css'
import colors from '../../../common/styles/colors.module.css'
import CommonListArea, { ListAreaTemplateProps } from '../common/components/list-area-template';
import Fetch from '../../../utils/helpers/fetchHelper';

const f = new Fetch()

const IntroArea = () => {

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
        const url = `${process.env.REACT_APP_NODE_USER_AUTH_API_BASE_URL}/user/login`
        const body = await f.post({ url, headers: null, body: jsonStructure })
        if (body && body.accessToken) {
            setJwt(body.accessToken)
        }
    }

    const signup = async () => {
        const url = `${process.env.REACT_APP_NODE_USER_AUTH_API_BASE_URL}/user/createUser`
        const body = await f.post({ url, headers: null, body: jsonStructure })
        if (body && body.accessToken) {
            setJwt(body.accessToken)
        }
    }


    const introText =
        <div> User Login and Signup is done using <b className={colors.limegreen}>username</b> and < b className={colors.limegreen} > password</b > <br />
            This generates a < b className={colors.limegreen} > json web token</b > </div>


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

const JwtGeneration = () => {

    const { jwt } = useContext(JwtProvider)

    return (
        <div className={styles.code_area_text}>
            <div>Once the user has logged in a JWT <b className={colors.limegreen}>(json web token)</b> is generated</div>
            <div className={styles.block_title}>JWT</div>
            <div className={styles.block_content}>
                <div className={styles.interactiveArea}>
                    <div className={styles.ia_header_2}>Your JWT: <div className={styles.smaller_text}>{jwt}</div></div>
                </div>
                <div className={styles.subtext}>This JWT will be used to authenticate you henceforth</div>
            </div>
        </div>
    )
}

const LogoutArea = () => {

    const { jwt, setJwt } = useContext(JwtProvider)

    const logout = async () => {
        const url = `${process.env.REACT_APP_NODE_USER_AUTH_API_BASE_URL}/user/logout`
        const body = await f.post({ url, headers: { 'accesstoken': jwt }, body: {} })
        if (body) {
            setJwt('')
        }
    }

    return (
        <div className={styles.code_area_text}>
            <div>For logging out the client sends a <b className={colors.limegreen}>POST</b> request with the <b className={colors.limegreen}>JWT</b> in the header </div>
            <div className={styles.block_title}>Logout </div>
            <div className={styles.block_split}>
                <div className={styles.interactive_area}>
                    <div className={styles.ia_header_1}>Are you sure you want to logout?  </div>
                    <div className={styles.signup_button} onClick={logout}>Logout</div>
                </div>
                <div className={styles.demo_pane}>
                    <div className={styles.demo_pane_heading_text} >Request Headers: </div>
                    <div className={styles.json_rep}>{JSON.stringify({ accesstoken: jwt }, null, 6)}</div>
                </div>
            </div>
        </div>
    )
}

const areas = [
    <IntroArea />,
    <JwtGeneration />,
    <LogoutArea />
]

export default areas;

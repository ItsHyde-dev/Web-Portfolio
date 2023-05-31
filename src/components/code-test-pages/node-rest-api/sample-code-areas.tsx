import { BaseSyntheticEvent, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { JwtProvider } from '../common/components/connected_ul_object';
import styles from './node-rest-api-test.module.css'
import colors from '../../../common/styles/colors.module.css'


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

        const url = `${process.env.REACT_APP_API_BASE_URL}/user/login`
        try {

            let response: Response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonStructure)
            });

            if (!response) {
                return;
            }

            const body = await response.json();

            if (response.status === 400) {
                console.log("API threw 400")
                toast.error(body.message)
            }

            if (response.status === 200) {
                setJwt(body.data.accessToken)
                console.log(response)
                toast.success('Login Successful');
            }

        } catch (error) {
            console.log("fetch error : ", error)
        }
    }

    return (
        <div className={styles.code_area_text}>
            User Login and Signup is done using <b className={colors.limegreen}>username</b> and <b className={colors.limegreen}>password</b> <br />
            This generates a  <b className={colors.limegreen}>json web token</b>

            <div className={styles.block_title}>Signup / Login </div>

            <div className={styles.block_split}>
                <div className={styles.interactive_area}>
                    <div className={styles.ia_header_1}>Enter your username: </div>
                    <input type="text" placeholder="username" onChange={usernameHandler} className={styles.input} />
                    <div className={`
                        ${styles.ia_header_1}
                        ${styles.pad_top}
                    `}>Enter your password: </div>
                    <input type="password" placeholder="password" onChange={passwordHandler} className={styles.input} />

                    <div className={styles.signup_login_button_container}>
                        <div className={styles.signup_button} onClick={() => console.log(jsonStructure)}>Sign up</div>
                        <div className={styles.signup_button} onClick={login}>Login</div>
                    </div>

                </div>
                <div className={styles.demo_pane}>
                    <div className={styles.demo_pane_heading_text} >Request Body: </div>
                    <div className={styles.json_rep}>{JSON.stringify(jsonStructure, null, 6)}</div>
                </div>
            </div>
        </div>
    )

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

        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/user/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accesstoken': jwt
            }
        })

        if (!response) {
            return;
        }

        if (!response.ok) {
            return;
        }


        // the body can be used later when the api is properly configured
        const body = await response.json()

        if (response.status === 400) {
            console.log("API threw 400")
            return;
        }

        if (response.status === 200) {
            setJwt('')
            toast.success('Logged out successfully')
            return;
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

import { BaseSyntheticEvent, SyntheticEvent, useState } from 'react';
import styles from './node-rest-api-test.module.css'

const IntroArea = () => {

    const [jsonStructure, setJsonStructure] = useState({
        username: '',
        password: ''
        });

    const usernameHandler = (event: BaseSyntheticEvent) => {
        setJsonStructure({ ...jsonStructure, username: event.target.value });
    }

    return (
        <div className={styles.code_area_text}>
            User Login and Signup is done using <b>username</b> and <b>password</b> <br />
            This generates a  <b>json web token</b>
            <div className={styles.login_split}>
                <div>
                    <div className={styles.signup_start}>Enter your username: </div>
                    <input type="text" placeholder="username" onChange={usernameHandler} className={styles.input} />
                </div>
                <div className={styles.json_rep}>{JSON.stringify(jsonStructure, null, 6)}</div>
            </div>
        </div>
    )

}



const areas = [
    <IntroArea />
]

export default areas;

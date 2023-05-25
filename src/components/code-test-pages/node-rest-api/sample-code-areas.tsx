import styles from './node-rest-api-test.module.css'

const introArea =
    <div className={styles.code_area_text}>
        User Login and Signup is done using <b>username</b> and <b>password</b> <br />
        This generates a  <b>json web token</b>
        <div className={styles.signup_start}>Enter your username: </div>
        <input type="text" placeholder="username" className={styles.input}/>
    </div>



const areas = [
    introArea
]

export default areas;

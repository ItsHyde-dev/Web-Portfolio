import Navbar from "../navbar/navbar"
import styles from "./contact-page.module.css"
import animation from '../../common/styles/animations.module.css'
import commonStyles from '../../common/styles/css-components.module.css'


function AboutPage() {
    return (
        <>
            <Navbar highlight="about" />
            <div className={styles.heading}>About Me</div>
            <div className={`${commonStyles.ehl} ${animation.expand_from_center}`} />
        </>
    )
}

export default AboutPage

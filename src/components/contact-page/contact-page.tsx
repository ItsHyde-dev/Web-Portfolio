import Navbar from "../navbar/navbar";
import positioning from '../../common/styles/positioning.module.css'
import animation from '../../common/styles/animations.module.css'
import common from '../../common/styles/css-components.module.css'
import styles from './contact-page.module.css'
import { FaRegCopy } from 'react-icons/fa'
import { toast, ToastContainer } from "react-toastify";
import GithubLogo from '../../assets/github-full-logo.png'
import LinkedinLogo from '../../assets/linkedin-full-logo.png'
import InstagramLogo from '../../assets/instagram-logo.png'

export default function ContactPage() {
    return (
        <>
            <Navbar highlight="contact" />
            <h1 className={positioning.vertical_center}>Contact Me</h1>
            <div className={`
                ${animation.expand_from_center}
                ${common.ehl}
            `}></div>
            <ContactInformation />
            <ToastContainer
                position="bottom-left"
                theme="dark"
            />
        </>
    )
}

export function ContactInformation() {

    const copyEmail = () => {
        navigator.clipboard.writeText('heyitshyde@gmail.com')
        toast.success('Email copied to clipboard')
    }

    const copyName = () => {
        navigator.clipboard.writeText('Himanshu Joshi')
        toast.success('Name copied to clipboard')
    }

    return (
        <div className={styles.contact_info_container}>
            <div className={styles.grid}>
                    <div className={styles.info_desc} >Name</div>
                    <div className={styles.info_text}>Himanshu Joshi <FaRegCopy onClick={copyName} /></div>
                    <div className={styles.info_desc}>Email</div>
                    <div className={styles.info_text}>heyitshyde@gmail.com <FaRegCopy onClick={copyEmail} /></div>
                    <div className={styles.info_desc}>Location</div>
                    <div className={styles.info_text}>Navi Mumbai</div>
                <div className={styles.social_media_container}>
                    <button onClick={() => window.open('https://www.instagram.com/its_hyde/')}><img src={InstagramLogo} /></button>
                    <button onClick={() => window.open('https://www.linkedin.com/in/himanshu-joshi-1a4331218')}><img src={LinkedinLogo} /></button>
                    <button onClick={() => window.open('https://github.com/ItsHyde-dev')}><img src={GithubLogo} /></button>
                </div>
            </div>
        </div>
    )
}

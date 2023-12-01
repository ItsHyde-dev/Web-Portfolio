import styles from './contact-page.module.css'
import { FaRegCopy } from 'react-icons/fa'
import { toast } from "react-toastify";
import GithubLogo from '../../assets/github-full-logo.png'
import LinkedinLogo from '../../assets/linkedin-full-logo.png'
import InstagramLogo from '../../assets/instagram-logo.png'

export function ContactInformation(ref: any) {

    const copyEmail = () => {
        navigator.clipboard.writeText('heyitshyde@gmail.com')
        toast.success('Email copied to clipboard')
    }

    const copyName = () => {
        navigator.clipboard.writeText('Himanshu Joshi')
        toast.success('Name copied to clipboard')
    }

    return (
        <div ref={ref} className={styles.contact_info_container}>
            <div className={styles.grid}>
                <div className={styles.info_desc} >Name</div>
                <div className={styles.info_text}>Himanshu Joshi <FaRegCopy onClick={copyName} /></div>
                <div className={styles.info_desc}>Email</div>
                <div className={styles.info_text}>himanshu.h.joshi@outlook.com <FaRegCopy onClick={copyEmail} /></div>
                <div className={styles.info_desc}>Location</div>
                <div className={styles.info_text}>Navi Mumbai</div>
                <div className={styles.social_media_container}>
                    <button onClick={() => window.open('https://www.instagram.com/its_hyde/')}><img alt="Instagram" src={InstagramLogo} /></button>
                    <button onClick={() => window.open('https://www.linkedin.com/in/himanshu-joshi-1a4331218')}><img alt="Linkedin" src={LinkedinLogo} /></button>
                    <button onClick={() => window.open('https://github.com/ItsHyde-dev')}><img alt="Github" src={GithubLogo} /></button>
                </div>
            </div>
        </div>
    )
}

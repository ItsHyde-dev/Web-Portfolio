import Navbar from "../navbar/navbar";
import positioning from '../../common/styles/positioning.module.css'
import animation from '../../common/styles/animations.module.css'
import common from '../../common/styles/css-components.module.css'
import styles from './contact-page.module.css'
import { FaRegCopy } from 'react-icons/fa'
import { toast, ToastContainer } from "react-toastify";

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

function ContactInformation() {

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
            <table>
                <tr>
                    <th>Name</th>
                    <td>Himanshu Joshi <FaRegCopy onClick={copyName} /></td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>heyitshyde@gmail.com <FaRegCopy onClick={copyEmail}/></td>
                </tr>
                <tr>
                    <th>Location</th>
                    <td>Navi Mumbai</td>
                </tr>
            </table>
            <p style={{ display: 'flex', flexDirection: 'row' }}>
                <button>LinkedIn</button>
                <button>Instagram</button>
                <button>GitHub</button>
            </p>
        </div>
    )
}

import Navbar from '../navbar/navbar'
import styles from './homepage.module.css'
import animation from '../../common/styles/animations.module.css'
import position from '../../common/styles/positioning.module.css'
import ContactImage from '../../assets/contact-image.jpeg'
import { ContactInformation } from '../contact-page/contact-page'
import { ToastContainer } from 'react-toastify'
import { BsChevronDoubleDown } from 'react-icons/bs'
import { useRef } from 'react'


export default function Home() {

    const ref = useRef<null | HTMLDivElement>(null)

    const scrollToContactInfo = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <div className={styles.top_section}>
                <Navbar highlight="home" />
                <HomepageTopSection />
                <div className={position.vertical_center}>
                    <p className={`
                    ${styles.parah_text}
                    ${animation.fade_in}
                `}>" Hard work unlocks the hidden potential of talent "</p>
                    <p className={`
                    ${styles.parah_text}
                    ${styles.small1}
                    ${animation.fade_in}
                `}>
                        As a highly skilled and versatile software engineer,
                        I have honed my abilities in multiple programming languages,
                        allowing me to bring a diverse range of expertise to any project.<br />
                        With a keen eye for problem-solving and a commitment to excellence,
                        I strive to create innovative software solutions that surpass expectations.<br />
                        Explore the demos of my personal projects on the project page.  </p>
                </div>
            </div>
            <div className={`${position.vertical_center} ${styles.contact_me_title}`} onClick={scrollToContactInfo}>Contact Me <BsChevronDoubleDown /></div>
            {
                ContactInformation(ref)
            }
            <ToastContainer
                position="bottom-left"
                theme="dark"
            />
        </div>
    )
}

function HomepageTopSection() {
    return (
        <>
            <div className={styles.row}>
                <div className={styles.header_div}>
                    <div className={`
                    ${styles.ht}
                    ${animation.slide_in_left}
                `}>
                        Hello <br />
                    </div>
                    <h2 className={`
                    ${styles.ht}
                    ${styles.ht2}
                    ${animation.slide_in_left}
                `}>
                        I am a Software Developer
                    </h2>
                </div>

                <div className={styles.image_container}>
                    <img src={ContactImage} className={styles.contact_image} alt="" />
                </div>

            </div>
            <div className={position.vertical_center} >
                <div className={styles.expanding_divider + " " + animation.expand_from_center} />
            </div>
        </>
    )
}

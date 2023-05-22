import React from "react"
import Navbar from "../navbar/navbar"
import positioning from "../../common/styles/positioning.module.css"
import styles from "./contact-page.module.css"
import ContactImage from '../../assets/contact-image.jpeg'

function ContactPage() {
    return (
        <>
            <Navbar />

            <div className={styles.heading}>Contact Me</div>

            <div className={styles.flex_row}>
                <div className={styles.image_and_name_container} data-name="Himanshu Joshi">
                    <img src={ContactImage} className={styles.contact_image}/>
                </div>

            </div>
        </>
    )
}

export default ContactPage

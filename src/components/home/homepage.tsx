import Navbar from '../navbar/navbar'
import styles from './homepage.module.css'
import animation from '../../common/styles/animations.module.css'
import position from '../../common/styles/positioning.module.css'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className={styles.header_div}>
                <h1 className={`
                    ${styles.ht}
                    ${animation.slide_in_left}
                `}>
                    Hello <br />
                </h1>
                <h2 className={`
                    ${styles.ht}
                    ${styles.ht2}
                    ${animation.slide_in_left}
                `}>
                    I am a Software Developer
                </h2>
            </div>
            <div className={position.vertical_center} >
                <div className={styles.expanding_divider + " " + animation.expand_from_center} />
            </div>
            <div className={position.vertical_center}>
                <p className={`
                    ${styles.parah_text}
                    ${styles.italics}
                    ${animation.fade_in}
                `}>" Random quote from the internet "</p>
                <p className={`
                    ${styles.parah_text}
                    ${styles.small1}
                    ${animation.fade_in}
                `}>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
            </div>
        </div>
    )
}

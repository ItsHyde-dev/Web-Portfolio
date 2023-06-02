import styles from '../test-page-common-styles.module.css'

export default function CommonListArea(introText: string, title: string, rightBlockTitle: string, leftBlockTitle: string) {
    return (
        <div className={styles.list_area}>
            <div className={styles.list_area_intro_text}>{introText}</div>
            <div className={styles.list_area_title}>{title}</div>
            <div className={styles.list_area_block_split}>
                <div className={styles.list_area_block_left}>
                    <div className={styles.list_area_block_left_title}>{leftBlockTitle}</div>
                </div>
                <div className={styles.list_area_block_right}>
                    <div className={styles.list_area_block_right_title}>{rightBlockTitle}</div>
                </div>
            </div>
        </div>
    )
}

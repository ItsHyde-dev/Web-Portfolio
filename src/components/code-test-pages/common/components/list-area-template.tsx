import { ReactNode } from 'react'
import styles from '../test-page-common-styles.module.css'


export interface ListAreaTemplateProps {
    introText: ReactNode,
    title: string,
    leftBlockTitle: string | null
    rightBlockTitle: string | null,
    leftBlockChildComponent: ReactNode,
    rightBlockChildComponent: ReactNode,
}

export default function CommonListArea(props: ListAreaTemplateProps) {
    return (
        <div className={styles.list_area}>
            <div className={styles.list_area_intro_text}>{props.introText}</div>
            <div className={styles.list_area_title}>{props.title}</div>
            <div className={styles.list_area_block_split}>
                <div className={styles.list_area_block_left}>
                    <div className={styles.list_area_block_left_title}>{props.leftBlockTitle}</div>
                    {props.leftBlockChildComponent}
                </div>
                <div className={styles.list_area_block_right}>
                    <div className={styles.list_area_block_right_title}>{props.rightBlockTitle}</div>
                    {props.rightBlockChildComponent}
                </div>
            </div>
        </div>
    )
}

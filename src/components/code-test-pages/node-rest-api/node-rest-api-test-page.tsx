import React from 'react';
import Navbar from '../../navbar/navbar';
import styles from './node-rest-api-test.module.css'
import animation from'../../../common/styles/animations.module.css'

export default function NodeRestApiTestPage() {
    return (
        <div>
            <Navbar highlight="projects"/>
            <h1 className={`
                ${styles.heading}
                ${animation.slide_in_left_small}
            `}>Hey!</h1>
            <h3 className={`
                ${styles.heading}
                ${styles.delay_subtext}
                ${animation.slide_in_left_small}
            `}>Let's Test out how this works!</h3>
        </div>
    )
}

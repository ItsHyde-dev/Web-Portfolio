import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'
function Navbar(props: { [key: string]: any }) {

    let width = window.innerWidth;

    const selectedClass = styles.selected;
    const nav_button = styles.nav_button;

    const buttonBuilder = (name: string) => {
        let cssClass = styles.nav_button;
        if (props.highlight === name.toLowerCase()) {
            cssClass += ` ${selectedClass}`;
        }

        return <div className={cssClass}>{name}</div>
    }

    if (width > 768) {
        return (
            <div className={styles.navbar}>
                <Link to="/" className={styles.router_link}>
                    {
                        buttonBuilder('Home')
                    }
                </Link>
                <Link to="/projects" className={styles.router_link}>
                    {
                        buttonBuilder('Projects')
                    }
                </Link>
                <Link to="/contact" className={styles.router_link}>
                    {
                        buttonBuilder('Contact')
                    }
                </Link>
            </div>
        )
    }
    else {
        return (
            <div>The width is small</div>
        )
    }
}

export default Navbar

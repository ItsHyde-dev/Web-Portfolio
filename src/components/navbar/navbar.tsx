import React from 'react'
import { Link } from 'react-router-dom';
import styles from './navbar.module.css'
function Navbar() {

    let width = window.innerWidth;

    if (width > 768) {
        return (
            <div className={styles.navbar}>
                <Link to="/" className={styles.router_link}>
                    <div className={styles.nav_button} >Home</div>
                </Link>
                <Link to="/projects" className={styles.router_link}>
                    <div className={styles.nav_button}>Projects</div>
                </Link>
                <Link to="/contact" className={styles.router_link}>
                    <div className={styles.nav_button} >Contact</div>
                </Link>
                <div className={styles.nav_button}>&#128058;</div>
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

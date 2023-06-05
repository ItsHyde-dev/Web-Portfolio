import { Link } from 'react-router-dom';
import styles from './navbar.module.css'
function Navbar(props: { [key: string]: any }) {

    const selectedClass = styles.selected;

    const buttonBuilder = (name: string) => {
        let cssClass = styles.nav_button;
        if (props.highlight === name.toLowerCase()) {
            cssClass += ` ${selectedClass}`;
        }

        return <button className={cssClass}>{name}</button>
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.start_logo}>HJ</div>
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
            <Link to="/about" className={styles.router_link}>
                {
                    buttonBuilder('About')
                }
            </Link>
        </div>
    )
}

export default Navbar

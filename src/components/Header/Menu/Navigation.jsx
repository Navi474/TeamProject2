import styles from './Menu.module.css';

export default function Navigation() {
    return(
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href="#">Who we are</a>
                </li>
                <li>
                    <a href="#">Contacts</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
            </ul>
        </nav>
    )
}
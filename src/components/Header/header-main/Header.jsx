import styles from './header-styles/headerStyles.module.css';
import Logo from '../../Logo/Logo';
import Navigation from '../Menu/Navigation';
import Auth from '../SignUp/Auth';

export default function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <Navigation />
            <Auth />
        </header>
    );
}
import styles from './header-styles/headerStyles.module.css';
import { useState } from "react";
import Logo from '../../Logo/Logo';
import Navigation from '../Menu/Navigation';
import Auth from '../SignUp/Auth';
import { MdAccountCircle } from 'react-icons/md';

export default function Header() {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.logoBurger}>
                    <Logo />
                </div>

                <div className={styles.tabletAvatar}>
                    <MdAccountCircle size={40} />
                </div>

                <div className={styles.desktopContent}>
                    <Navigation />
                    <Auth />
                </div>

                <button className={styles.burgerBtn} onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                    Menu <span className={styles.arrow}>{isBurgerOpen ? '〉' : '∨'}</span>
                </button>
            </div>
            {isBurgerOpen && (
                <div className={styles.mobileBurgerMenu}>
                    <div className={styles.burgerMenu}>
                        <div className={styles.mobileLeft}>
                            <Navigation />
                        </div>
                        <div className={styles.mobileRight}>
                            <Auth />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
import React from 'react';
import styles from "./Footer-styles/Footer.module.css";
import Logo from '../Logo/Logo.jsx';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.logoWrapper}>
                    <Logo />
                </div>

                <div className={styles.addressBlock}>
                    <div className={styles.blockTitle}>Address</div>
                    <address className={styles.addressText}>
                        Svobody str. 35<br />
                        Kyiv<br />
                        Ukraine
                    </address>
                </div>

                <div className={styles.contactsBlock}>
                    <div className={styles.blockTitle}>Contact us</div>
                    <div className={styles.socialsRow}>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className={`${styles.iconBtn} ${styles.inst}`} aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className={`${styles.iconBtn} ${styles.fb}`} aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className={`${styles.iconBtn} ${styles.wa}`} aria-label="WhatsApp">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
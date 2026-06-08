import styles from './Logo.module.css';
import logoImg from '../../images/logo1.webp';

export default function Logo() {
    return (
        <div className={styles.logo}>
            <img src={logoImg} alt="24/7" />
        </div>
    );
}
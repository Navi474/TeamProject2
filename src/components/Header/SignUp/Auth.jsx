import { MdAccountCircle } from 'react-icons/md';
import styles from './Auth.module.css';

export default function Auth() {

    const handleOpenModal = () => {
        console.log("modalka");
    };

    return (
        <div className={styles.authContainer}>
            <button className={styles.signUpBtn} onClick={handleOpenModal}>
                Sign Up
            </button>
            <MdAccountCircle className={styles.avatar} />
        </div>
    );
}
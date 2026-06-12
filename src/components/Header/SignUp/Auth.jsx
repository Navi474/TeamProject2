import { useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import styles from './Auth.module.css';
import Modal from '../Modal/Modal';

export default function Auth() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userName, setUserName] = useState('');

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleRegister = (name) => {
        setUserName(name);
        setIsModalOpen(false);
    };

    return (
        <div className={styles.authContainer}>
            {userName ? (
                <span
                    style={{ fontFamily: 'var(--font-family)', fontWeight: 600, cursor: 'pointer', fontSize: '16px', color: '#000' }}
                    onClick={() => setUserName('')}
                    title="Logout"
                >
                    {userName}
                </span>
            ) : (
                <button className={styles.signUpBtn} onClick={handleOpenModal}>
                    Sign Up
                </button>
            )}

            <MdAccountCircle className={styles.avatar} />
            {isModalOpen && (
                <Modal onClose={handleCloseModal} onRegister={handleRegister} />
            )}
        </div>
    );
}
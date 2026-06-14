import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import styles from './Modal.module.css';

export default function Modal({ onClose, onRegister }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.username.trim()) {
            onRegister(formData.username);
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>

                <button className={styles.closeBtn} onClick={onClose}>
                    <IoMdClose size={24} color="#000" />
                </button>
                <h2 className={styles.modalTitle}>Sign up</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>E-Mail</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-Mail"
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitBtn}>
                        Sign up
                    </button>
                </form>
                <p className={styles.loginText}>
                    Already have an account? <a>Log In</a>
                </p>
            </div>
        </div>
    );
}
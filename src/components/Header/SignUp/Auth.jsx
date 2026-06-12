import { MdAccountCircle } from 'react-icons/md';
import styles from './Auth.module.css';
import { IoMdClose } from "react-icons/io";
import {useState} from "react";

export default function Auth() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [username, setUsername] = useState("");
   const [modalData, setModalData] = useState({
       username: "",
       email: "",
       password: "",
   });

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalData({username: "", email: "", password: "", });
    }
    return (
        <div className={styles.authContainer}>
            <button className={styles.signUpBtn} onClick={handleOpenModal}>
                Sign Up
            </button>
            <MdAccountCircle className={styles.avatar} />
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>

                    </div>
                </div>
            )}
        </div>
    );
}
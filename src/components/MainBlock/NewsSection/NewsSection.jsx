import styles from './NewsSection-styles/NewsSection.module.css';

import news1Img from '../../../images/news1.png';
import news2Img from '../../../images/news2.png';
import news3Img from '../../../images/news3.png';
import news4Img from '../../../images/news4.png';

export default function NewsSection() {
    const articles = [
        {
            id: 1,
            image: news1Img,
            text: 'Rescue pups pose as ghosts in festive photo shoot'
        },
        {
            id: 2,
            image: news2Img,
            text: 'Cat interrupts morning coffee on sunny Washington morning'
        },
        {
            id: 3,
            image: news3Img,
            text: 'New study finds dogs pay more attention to women'
        },
        {
            id: 4,
            image: news4Img,
            text: 'Petting dogs gives health benefit, even if they are not yours'
        }
    ];

    return (
        <section className={styles.newsContainer}>
            <h2 className={styles.title}>Interacting with our pets</h2>

            <div className={styles.newsGrid}>
                {articles.map((item) => (
                    <div key={item.id} className={styles.newsCard}>
                        <img className={styles.image} src={item.image} alt="pet news" />
                        <p className={styles.cardText}>{item.text}</p>
                    </div>
                ))}
            </div>
            <button className={styles.seeMoreBtn}>See more</button>
        </section>
    );
}
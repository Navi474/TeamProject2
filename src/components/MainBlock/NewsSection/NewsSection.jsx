import styles from './NewsSection-styles/NewsSection.module.css';

export default function NewsSection() {
    const articles = [
        {
            id: 1,
            image: 'src/images/news1.png',
            text: 'Rescue pups pose as ghosts in festive photo shoot'
        },
        {
            id: 2,
            image: 'src/images/news2.png',
            text: 'Cat interrupts morning coffee on sunny Washington morning'
        },
        {
            id: 3,
            image: 'src/images/news3.png',
            text: 'New study finds dogs pay more attention to women'
        },
        {
            id: 4,
            image: 'src/images/news4.png',
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
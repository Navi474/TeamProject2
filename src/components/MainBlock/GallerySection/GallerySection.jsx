import styles from './GallerySection-styles/GallerySection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import gallery1 from '../../../images/gallery1.png';
import gallery2 from '../../../images/gallery2.png';
import gallery3 from '../../../images/gallery3.png';
import gallery4 from '../../../images/gallery4.png';
import gallery5 from '../../../images/gallery5.png';

export default function GallerySection() {
    const natureImages = [gallery1, gallery2, gallery3, gallery4, gallery5];

    return (
        <section className={styles.galleryContainer}>
            <h2 className={styles.title}>Beautiful nature</h2>

            <div className={styles.swiperWrapper}>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    modules={[EffectCoverflow, Pagination]}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.3,
                            spaceBetween: 10
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    }}
                >
                    {natureImages.map((src, index) => (
                        <SwiperSlide key={index} className={styles.slide}>
                            <img src={src} alt={`Nature ${index + 1}`} className={styles.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
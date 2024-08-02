import { useState, useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import styles from './Hero.module.css';

const slides = [
  {
    title: 'Industry Leader in Petroleum',
    subtitle: 'Pioneering advancements in the petroleum sector.',
    background: '/images/slide11.jpg'
  },
  {
    title: 'Premium Fuel Solutions',
    subtitle: 'Delivering superior quality fuels tailored to your needs.',
    background: '/images/slide33.webp'
  },
  {
    title: 'Expertise in Trading',
    subtitle: 'Leveraging advanced technology for efficient trading operations.',
    background: '/images/slide2.jpg'
  },
];


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationClass, setAnimationClass] = useState(styles.textEntering);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass(styles.textExiting);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setAnimationClass(styles.textEntering);
      }, 1000); // Match the duration of the exit animation
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${slides[currentSlide].background})` }}
    >
      <div className={styles.overlay}></div>
      <Container maxWidth="md" className={styles.heroContent}>
        <div className={`${styles.textWrapper} ${animationClass}`}>
          <Typography variant="h2" component="h1" className={styles.textWhite}>
            {slides[currentSlide].title}
          </Typography>
          <Typography variant="h5" className={styles.textWhite}>
            {slides[currentSlide].subtitle}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

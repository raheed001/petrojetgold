import { useState, useEffect, useRef } from 'react';
import { Typography, Container } from '@mui/material';
import styles from './Hero.module.css';
import Image from 'next/image';

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
  const [isExiting, setIsExiting] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsExiting(true);
      timeoutRef.current = window.setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsExiting(false);
      }, 1000); 
    };

    const interval = setInterval(handleSlideChange, 5000);

    return () => {
      clearInterval(interval);
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <Image 
        src={slides[currentSlide].background}
        alt={slides[currentSlide].title}
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <Container maxWidth="md" className={styles.heroContent}>
        <div className={`${styles.textWrapper} ${isExiting ? styles.textExiting : styles.textEntering}`}>
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

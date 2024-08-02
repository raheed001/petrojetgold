'use client';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const [activeLang, setActiveLang] = useState<'en' | 'ar'>('en');

  const handleTranslate = (lang: 'en' | 'ar') => {
    if (lang === 'ar') {
      // Redirect to Google Translate for Arabic
      window.location.href = 'https://translate.google.com/translate?sl=en&tl=ar&u=' + encodeURIComponent(window.location.href);
    } else {
      // For English, just update the active state
      setActiveLang('en');
    }
  };

  return (
    <div className={styles.languageSwitcher}>
      <Button
        color="inherit"
        className={activeLang === 'en' ? styles.activeButton : styles.inactiveButton}
        onClick={() => handleTranslate('en')}
      >
        {'English'}
      </Button>
      <span>|</span>
      <Button
        color="inherit"
        className={activeLang === 'ar' ? styles.activeButton : styles.inactiveButton}
        onClick={() => handleTranslate('ar')}
      >
        {'عربي'}
      </Button>
    </div>
  );
};

export default LanguageSwitcher;

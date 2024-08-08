'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import styles from './Header.module.css';
import HeaderTop from './HeaderTop';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      setIsScrolled(currentScrollTop > 50);

      if (currentScrollTop > lastScrollTop) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollTop]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuItemClick = () => {
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  return (
    <>
      <HeaderTop />
      <AppBar
        position="fixed"
        className={`${styles.solidHeader} ${isScrollingDown ? styles.hideHeader : styles.showHeader}`}
        style={{ boxShadow: 'none', top: '40px', zIndex: 49, marginTop: '-2%', paddingTop: '2%' }}
      >
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
                className={`${styles.iconMenu} ${drawerOpen ? styles.clicked : ''}`}
              >
                <svg className={styles.iconMenuSvg} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 250 250">
                  <title>Menu</title>
                  <g>
                    <line className={`${styles.line} ${styles.line1} ${drawerOpen ? styles.clicked : ''}`} x1="20" y1="30" x2="190" y2="30"></line>
                    <line className={`${styles.line} ${styles.line2} ${drawerOpen ? styles.clicked : ''}`} x1="20" y1="90" x2="150" y2="90"></line>
                    <line className={`${styles.line} ${styles.line3} ${drawerOpen ? styles.clicked : ''}`} x1="20" y1="150" x2="190" y2="150"></line>
                  </g>
                </svg>
              </IconButton>
              <div className={`${styles.drawer} ${drawerOpen ? styles.clicked : ''}`}>
                <div className={styles.links}>
                  <div className={`${styles.linkCon} ${drawerOpen ? styles.clicked : ''}`}>
                    <Link href="/" passHref>
                      <p className={styles.para} onClick={handleMenuItemClick}>Home</p>
                    </Link>
                  </div>
                  <div className={`${styles.linkCon} ${drawerOpen ? styles.clicked : ''}`}>
                    <Link href="/about" passHref>
                      <p className={styles.para} onClick={handleMenuItemClick}>About Us</p>
                    </Link>
                  </div>
                  <div className={`${styles.linkCon} ${drawerOpen ? styles.clicked : ''}`}>
                    <Link href="/products" passHref>
                      <p className={styles.para} onClick={handleMenuItemClick}>Products</p>
                    </Link>
                  </div>
                  <div className={`${styles.linkCon} ${drawerOpen ? styles.clicked : ''}`}>
                    <Link href="/contact" passHref>
                      <p className={styles.para} onClick={handleMenuItemClick}>Contact</p>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className={styles.leftMenuItems}>
              <Button>
                <Link href="/" passHref className={styles.leftMenuItems}>
                  Home
                </Link>
              </Button>
              <Button>
                <Link href="/about" passHref className={styles.leftMenuItems}>
                  About Us
                </Link>
              </Button>
              <Button>
                <Link href="/products" passHref className={styles.leftMenuItems}>
                  Products
                </Link>
              </Button>
              <Button>
                <Link href="/contact" passHref className={styles.leftMenuItems}>
                  Contact
                </Link>
              </Button>
            </div>
          )}
          <div style={{ flexGrow: 1 }}></div>
          <div className={styles.rightHeader}>
            <a href='/'>
              <Typography variant="h6" className={styles.logoText}>
                <Image src="/images/newlogofull.png" alt="Petrojet Logo" width={120} height={120} className={styles.newlogoImage} />
              </Typography>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

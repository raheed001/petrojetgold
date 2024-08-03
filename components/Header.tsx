'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [isScrollingDown, setIsScrollingDown] = useState<boolean>(false);
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

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  console.log('Current pathname:', pathname);

  const menuItems = (
    <>
      <Button>
        <Link href="/" passHref className={styles.leftMenuItems}>
          Home
        </Link>
      </Button>
      <Button>
        <Link href="/about" passHref className={styles.leftMenuItems}>
          About
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
    </>
  );

  return (
    <>
      <AppBar
        position="fixed"
        className={`${isScrolled ? styles.solidHeader : styles.transparentHeader} ${isScrollingDown ? styles.hideHeader : styles.showHeader}`}
        style={{ boxShadow: 'none' }}
      >
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                className={styles.menuButton}
              >
                <DensityMediumIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                classes={{ paper: styles.fullScreenDrawer }}
              >
                <List className={styles.drawerList}>
                  <ListItem className={styles.closeButton}>
                    <IconButton onClick={toggleDrawer(false)} color="inherit">
                      <CloseIcon />
                    </IconButton>
                  </ListItem>
                  <ListItem className={styles.drawerListItem} onClick={closeDrawer}>
                    <Link href="/" passHref>
                      <ListItemText primary="Home" />
                    </Link>
                  </ListItem>
                  <ListItem className={styles.drawerListItem} onClick={closeDrawer}>
                    <Link href="/about" passHref>
                      <ListItemText primary="About" />
                    </Link>
                  </ListItem>
                  <ListItem className={styles.drawerListItem} onClick={closeDrawer}>
                    <Link href="/products" passHref>
                      <ListItemText primary="Products" />
                    </Link>
                  </ListItem>
                  <ListItem className={styles.drawerListItem} onClick={closeDrawer}>
                    <Link href="/contact" passHref>
                      <ListItemText primary="Contact" />
                    </Link>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <div className={styles.leftMenuItems}>{menuItems}</div>
          )}
          <div style={{ flexGrow: 1 }}></div>
          <div className={styles.rightHeader}>
            <a href='/'>
              <Typography variant="h6" className={styles.logoText}>
                <Image src="/images/logo.png" alt="Petrojet Logo" width={100} height={50} className={styles.newlogoImage} />
                <Image src="/images/output.png" alt="Petrojet Logo" width={100} height={50} className={styles.logoImage} />
              </Typography>
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';

const HeaderOther = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
  }, []);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const pathname = usePathname();

  return (
    <AppBar position="fixed" className={isScrolled ? styles.solidHeader : styles.transparentHeader} style={{ boxShadow: 'none' }}>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)} className={styles.menuButton}>
              <DensityMediumIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} classes={{ paper: styles.fullScreenDrawer }}>
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
          <div className={styles.leftMenuItems}>
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
          </div>
        )}
        <div style={{ flexGrow: 1 }}></div>
        <div className={styles.rightHeader}>
          <Typography variant="h6" className={styles.logoText}>
            {pathname}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderOther;

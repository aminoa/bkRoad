import React, { Component } from 'react';
import styles from "../styles/footer.module.css"
import Divider from '@mui/material/Divider';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Divider/>
            <p>Copyright bkRoad © 2022</p>
        </div>
    )
}

export default Footer;
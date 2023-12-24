import React from "react";
import logo from '../../assets/logo.png';
import styles from './Logo.module.css';

export function Logo (){
    return(
        <img src={logo} alt="Qtify" className={styles.logo}/>
    )
}
import React from "react";
import logo from '../../assets/logo.png';
import styles from './Logo.module.css';

export function Logo (){
    return(
        <div className={styles.container}>
             <img src={logo} alt=";ogo" className={styles.logo}/>
        </div>
       
    )
}
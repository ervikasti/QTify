import React from "react";
import styles from "./Hero.module.css";
import Headphone from "../../assets/vibrating-headphone.png";

export function Hero(props){
    return(
        <div className={styles.hero}>
            <div className={styles.hero_text}>
                <div>{props.textOne}</div>
                <div>{props.textTwo}</div>
            </div>
            <div >
                <img className={styles.hero_img} src={Headphone} alt="headphone"/>
            </div>
        </div>
    )
}
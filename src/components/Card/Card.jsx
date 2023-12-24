import React from "react";
import styles from "./Card.module.css";
import Headphone from "../../assets/vibrating-headphone.png";

export function Card (){
    return(
        <div className={styles.card}>
            <div className={styles.card_detail}>
                <img className={styles.card_detail_img} src={Headphone} alt=""/>
                <div className={styles.card_detail_follow}>100 follows</div>
            </div>
            <p>This is  para</p>

        </div>
    )
}
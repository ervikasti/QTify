import React from "react";
import FeedbackBtn from "../FeedbackBtn/FeedbackBtn";
import styles from './Navbar.module.css';
import { Search } from "../Search/Search";
import { Logo } from "../Logo/Logo";

function Navbar(){
    return(
        <div className={styles.navbar}>
            <Logo />
            <Search placeholder={'Search a album of your choice'}/>
            <FeedbackBtn>Give Feedback</FeedbackBtn>
        </div>
       
    );
}

export default Navbar;
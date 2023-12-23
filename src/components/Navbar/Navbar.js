import React from "react";
import FeedbackBtn from "../FeedbackBtn/FeedbackBtn";
import styles from './Navbar.module.css';
import { Search } from "../Search/Search";

function Navbar(){
    return(
        <div className={styles.navbar}>
            <Search />
            <FeedbackBtn>Give Feedback</FeedbackBtn>
        </div>
       
    );
}

export default Navbar;
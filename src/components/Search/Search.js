import React from 'react';
import styles from './Search.module.css';
import {ReactComponent as SearchIcon} from '../../assets/search-icon.svg';

export function Search({placeholder}){

    const onSubmit =(e)=>{
        e.preventDefault();
        console.log("Submit Btn clicked");
    }
    return(
        <form onSubmit={onSubmit} className={styles.design}> 
            <input className={styles.input} type='text' placeholder={placeholder}></input>
            <button className={styles.searchbtn} typeof='submit'> <SearchIcon/></button>
        </form>
    )
}


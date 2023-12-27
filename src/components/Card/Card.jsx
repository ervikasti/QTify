import React from "react";
import styles from "./Card.module.css";
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';


export const Card = (props) => {
    // console.log(props?props.data:"null");
   
    if(props.data){
        // console.log(props.data.songs.length);
        var {id,image,slug,songs,title,follows,description} = props.data;
        var songLen= songs.length;
    }
    
    return(
        <Tooltip title={`${songLen} songs` } placement="top" arrow>
            <div className={styles.card}>
                <div className={styles.card_detail}>
                    <img className={styles.card_detail_img} src={image} alt="" loading="lazy"/>
                    <div className={styles.banner}>
                        <Chip 
                        label={ `${follows} Follows`} 
                        size="small"
                        className={styles.chip} />
                    </div>
                </div>
                <p className={styles.card_para}>{title}</p>
            </div>
        </Tooltip>
    );
}
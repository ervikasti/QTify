import React, { useState, useRef, useEffect } from "react";

import { Card } from "../Card/Card";
import styles from "./Section.module.css";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Grid from '@mui/material/Grid';



export default function Section( {data,type,category} ){

    const [songData, setSongData] = useState([]);

    
    useEffect( ()=> {
        if(category){
            // console.log(category.data);
            // setSongData(data);
            // setsongSCategory(category.data);
        
        setSongData(data); 
        }   
    });


    
    const [showAll, setShowAll] = useState({
        state : true,
        btnVerbage : 'Show All',
    });

    const showAllHandler = () =>{

        if(showAll.state){
            setShowAll({
                state: false,
                btnVerbage: 'Collapse',
            });    
        }else{
            setShowAll({
                state: true,
                btnVerbage: 'Show All',
            });
    
        }
        
    }

    // for Songs section
        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
            // console.log(newValue);
            setValue(newValue);
        };

   
    const handleClickGenre = (e) => {
        console.log(e.target.innerText);
        if(e.target.innerText === "ROCK"){
            const newArr = [...data];
            // console.log(newArr);
            const filteredData = newArr.filter( (data) => {
                if(data.genre.key === "rock"){
                    return true;
                }else{
                    return false;
                }
            })
            // console.log(filteredData);
            setSongData(filteredData);
        }else if(e.target.innerText === "JAZZ"){
            const newArr = [...data];
            // console.log(newArr);
            const filteredData = newArr.filter( (data) => {
                if(data.genre.key === "jazz"){
                    return true;
                }else{
                    return false;
                }
            })
            // console.log(filteredData);
            setSongData(filteredData);
        }else if(e.target.innerText === "POP"){
            const newArr = [...data];
            // console.log(newArr);
            const filteredData = newArr.filter( (data) => {
                if(data.genre.key === "pop"){
                    return true;
                }else{
                    return false;
                }
            })
            // console.log(filteredData);
            setSongData(filteredData);
        }else if(e.target.innerText === "BLUES"){
            const newArr = [...data];
            // console.log(newArr);
            const filteredData = newArr.filter( (data) => {
                if(data.genre.key === "blues"){
                    return true;
                }else{
                    return false;
                }
            })
            // console.log(filteredData);
            setSongData(filteredData);
        }else{
            // console.log(data);
            setSongData(data);
        }

    }  




    return(
        <div className={styles.section}>
            <div className={styles.section_title}>
                <div>{type}</div>
                {type !== "Songs" ? 
                <button onClick={showAllHandler} className={styles.section_btn}>{showAll.btnVerbage}</button>
                : <></>}
            </div>
            { type !== "Songs" ? 
                <div className={styles.carousel}>
                    {showAll.state ? 
                        <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={7}
                        navigation
                        //  pagination={{ clickable: true }}
                        //  scrollbar={{ draggable: true }}
                        //  onSwiper={(swiper) => console.log(swiper)}
                        //  onSlideChange={() => console.log('slide change')}
                    >
                            {
                                data.map( (e) => 
                                    (   
                                        <div key={e.id}> 
                                            <SwiperSlide>
                                                <Card type={type} data={e}/>
                                            </SwiperSlide>
                                        </div>
                                        
                                    )
                                )
                            
                            }
                        </Swiper>
                    :
                    
                    <Grid container spacing={3} gap={3}>
                        {
                            data.map( (e) => 
                                (   
                                    <div key={e.id}> 
                                        <Grid item>
                                            <Card data={e}/>
                                        </Grid>
                                    </div> 
                                )
                            )
                        }
                    </Grid>
                    
                    }

                </div>
                : <>

                {category.data? 
                 <>
                    <div >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="nav tabs example"
                            role="navigation"
                        >
                            <Tab className={styles.songs_tab} label="All"  onClick={handleClickGenre} />
                            {
                                category.data.map((label)=>(
                                    <Tab  className={styles.songs_tab} label={label.label} onClick={handleClickGenre} />
                                ))  
                            }
                        </Tabs>
                    </div> 
                    <div>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={7}
                            navigation
                            //  pagination={{ clickable: true }}
                            //  scrollbar={{ draggable: true }}
                            //  onSwiper={(swiper) => console.log(swiper)}
                            //  onSlideChange={() => console.log('slide change')}
                        >
                                {
                                    songData.map( (e) => 
                                        (   
                                            <div key={e.id}> 
                                                <SwiperSlide>
                                                    <Card data={e} type="song"/>
                                                </SwiperSlide>
                                            </div>
                                            
                                        )
                                    )
                                
                                }
                        </Swiper>

                    </div> 
                   </>  
                :<h1>Loading.....</h1>}
                
                </>
                       
            }
        </div>
        );
}
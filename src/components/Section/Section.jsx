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


export default function Section( {data,type} ){


    console.log(data);

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
            setValue(newValue);
        };




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
                                                <Card data={e}/>
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
                :
                <div>
                     <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="nav tabs example"
                        role="navigation"
                    >
                        <Tab label="Page One"  />
                        <Tab label="Page Two"  />
                        <Tab label="Page Three" />
                    </Tabs>
                    
                </div>
            }
        </div>
        );
}
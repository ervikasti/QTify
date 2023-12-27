import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Hero } from "../Hero/Hero";
import axios from 'axios';
import Section from "../Section/Section";

export const Home = () => {

    const [albumArr, setalbumArr] = useState([]);
    const [albumNew, setalbumNew] = useState([]);
    const [albumSongs, setalbumSongs] = useState([]);


    const fetchTopAlbum = async () =>{
        try {
            const albumData = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
            setalbumArr(albumData.data);  
            // console.log(albumData);
            
        } catch (error) {
            console.log(error);
            return [];
        }
        
    }

    const fetchNewAlbum = async ()=> {
        try {
            const albumData = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
            setalbumNew(albumData.data);  
            // console.log(albumData);
            
        } catch (error) {
            console.log(error);
            return [];
        } 
    }

    const fetchSong = async ()=> {
        try {
            const albumData = await axios.get('https://qtify-backend-labs.crio.do/songs');
            setalbumSongs(albumData.data);  
            // console.log(albumData);
            
        } catch (error) {
            console.log(error);
            return [];
        } 
    }

    useEffect( ()=> {
        fetchTopAlbum();
        fetchNewAlbum();
        fetchSong();
        // console.log(albumArr);
    },[])

    return (
        <>
        <Hero textOne={"100 Thousand Songs, ad-free"} textTwo={"Over thousands podcast episodes"}/>
        {/* <Card /> */}
        <Section type="Top Albums" data={albumArr}/>
        <Section type="New Albums" data={albumNew}/>
        <Section type="Songs" data={albumNew}/>
        </>
    );
}


import React, { useState } from 'react';
import { Carousel } from 'antd';
import './App.css';

import sunrise from "./images/sunrise-mt3.jpg";
import sunset from "./images/sunset-nitk-beach.jpg";
import diwali from "./images/diwali-blast.jpg";
import trek from "./images/trek.jpg";
import peak from "./images/baba-budhangiri.jpg";
import chikmagalur from "./images/chikmagalur.jpg";


function Gallery(props) {
    if (props.display) return (
        <Carousel autoplay effect="fade">
        <div className='slide'>
            <img src={sunrise} alt='sunrise int MT3, NITK'/>
        </div>
        <div className='slide'>
            <img src={sunset} alt='sunset at NITK beach'/>
        </div>
        <div className='slide'>
            <img src={diwali} alt='crackers'/>
        </div>
        <div className='slide'>
            <img src={trek} alt='kumara parvatha'/>
        </div>
        <div className='slide'>
            <img src={peak} alt='baba budhangiri peak'/>
        </div>
        <div className='slide'>
            <img src={chikmagalur} alt='chikmagalur'/>
        </div>
        </Carousel>
    )
    return <></>
}

function Projects() {
    const [display, toggleDisplay] = useState(false);
    console.log(window.innerWidth)
    if (window.innerWidth < 425 && !display) {
        toggleDisplay(!display);
    }
    return (
        <div className='collapser'>
        <button onClick={()=>toggleDisplay(!display)}>
            {display ? 'Gallery, close?' : 'Like to see photos from my gallery?'}
        </button>
        <Gallery display={display} />
        </div>
    )}

export default Projects;
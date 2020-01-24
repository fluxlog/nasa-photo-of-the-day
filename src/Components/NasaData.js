import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

import styled from "styled-components"

const MButton= styled.a`
border-radius: 5px;
border-color: skyblue;
height: 125px;
width: 300px;
background-color: slategray;
color: red;
font-size: 2.5rem;
`;

const Space = styled.img`
border: 10px solid orange;
height: 300px;
width: 300px;
`;

const Parastyle= styled.p`
width: 500px;
color: orange;
font-size: 2rem;
`;

function NasaCont() {
    const [nasa, setNasa] = useState('');

    useEffect(() => {
axios.get('https://api.nasa.gov/planetary/apod?api_key=syY4eJ8apehPHBubjM5WwemliGNEiij6GvUgPhEZ')
     .then(response => {
         console.log(response.data);
         setNasa(response.data);
     })
     .catch(err => {
        console.log(err);
    });
}, []);

return (
    <div className="nasacont">
<MButton href="https://apod.nasa.gov/apod/astropix.html">Astropix!</MButton>
<Space className="spaceimage" alt="APOD" src={nasa.url}/>
<Parastyle>{nasa.explanation}</Parastyle>
<Card 
title={nasa.title}
date={nasa.date}
/>
    </div>
);
}

export default NasaCont;
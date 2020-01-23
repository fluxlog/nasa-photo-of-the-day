import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

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
<Card 
title={nasa.title}
expl={nasa.explanation}
date={nasa.date}
imgUrl={nasa.url}
/>
    </div>
);
}

export default NasaCont;
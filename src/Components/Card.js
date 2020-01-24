import React from 'react';
import {CardText, CardImg, CardHeader, CardBody, CardTitle} 
from 'reactstrap';

function Card(props) {
    return (
<div className="card">
<h1>{props.title}</h1>
<img src={props.imgUrl} />
<h2>{props.date}</h2>
<p>{props.expl}</p>

</div>
    );
}

export default Card
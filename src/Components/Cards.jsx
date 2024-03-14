import React from "react";
import '../App.css';
import data from '../data'


const Cards = (props) => {

    return (
        data.map((item) => {
            return(
            <div className="card">
                <img src={item.img} alt="/" />
                <h1>{item.event}</h1>
                <h3>{item.date}</h3>
            </div>
            )
        }
        )
    );
}

export default Cards;
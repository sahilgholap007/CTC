import React from "react";
import data from '../expdata'

const ExpCards = () => {
    return(
        data.map((item)=>{
            return(
                <div className="exp-cards">
                <img src={item.img} alt="/" />
                <h1>{item.event}</h1>
                <h3>Enter a realm of unending wonder and excitement with Revel Travel’s curated festival experiences.</h3>
                <a href={item.url}>Book Now</a>
              </div>
            )
        })
    )
};

export default ExpCards;

import React from 'react'
import '../App.css'
import data from '../dddata'

const DdCards = (props) => {
  return (
    data.map((item) => {
      return(
        <div className='dd-card'>
          <div className='image-container'>
          <img src={item.img} alt='/ad'/>
          </div>
        <h1>{item.event}</h1>
        <h3>Enter a realm of unending wonder and excitement with ExploreXperts Travel’s curated festival experiences.</h3>
        <a href={item.url}>Book Now</a>
      </div>
      )
    })

  )
}

export default DdCards
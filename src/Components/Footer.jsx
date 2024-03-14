import React from 'react'
import "../App.css"

const Footer = () => {
  return (
    <div className="footer">
    <div className="menu">
      <h1>Menu</h1>
      <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>
    </div>
    <div className="menu">
      <h1>Experience</h1>
      <ul>
        <li>Drive</li>
        <li>Events</li>
        <li>Gifts</li>
        <li>Corporate</li>
      </ul>
    </div>
    <div className="menu">
      <h1>Follow Us</h1>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </ul>
    </div> 
    <div className="menu">
      <h1>Contact</h1>
      <ul>
        <p>Address : Shop no. 2, Siddhivinayak Aarambh, Karanjade, Sector R5, Panvel, Navi-Mumbai-410206</p>
        <br/>
        <p>Contact no : 9702208332</p>
      </ul>
    </div>
    
  </div>
  )
}

export default Footer
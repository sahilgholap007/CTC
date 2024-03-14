import React from "react";
import logo from "../images/Explore Xperts.svg";
import DdCards from "./DdCards";

const Navbar = () => {
  const toggle = () => {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];
    const logo = document.getElementsByClassName("logo")[0];
    navbarLinks.classList.toggle("active");
    logo.classList.toggle("active");
  };

  window.addEventListener("scroll", function () {
    const scrollWatcher = document.querySelector(".scroll-watcher");
    const scrollPercentage =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    scrollWatcher.style.transform = `scaleX(${scrollPercentage})`;
  });

  return (
    <div className="nav-con">
      <div className="navbar">
        <a href="/">
        <img src={logo} alt="logo" className="logo"/>
        </a>
        <div className="toggle-button" onClick={toggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li className="dropdown">
              <a className="dropbtn" href="/Experiences">Experience
              </a>
              <div class="dropdown-content">
            <DdCards />
        </div>
            </li>
            <li>
              <a href="/progress">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="scroll-watcher"></div>

      </div>
    </div>
  );
};

export default Navbar;

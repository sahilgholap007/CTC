import React from "react";
import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";
import four from "../images/four.jpg";
import six from "../images/six.jpg";
import "../App.css";
import Cards from "../Components/Cards";
import test2 from "../video/test2.mp4";

const Home = () => {

  const scrollintoview = () => {
    const aboutContainer = document.querySelector('.about-container')
    const rect = aboutContainer.getBoundingClientRect();
    const y = rect.top + window.scrollY;
    const modifiedY = y - 98; 
    window.scrollTo({ top: modifiedY, behavior: 'smooth' });
  }

  window.addEventListener('scroll', function() {
    const images = document.querySelectorAll('img');
    const windowHeight = window.innerHeight;
  
    images.forEach(image => {
      const imageTop = image.getBoundingClientRect().top;
  
      if (imageTop < windowHeight) {
        image.classList.add('fade-in');
      } else {
        image.classList.remove('fade-in');
      }
    });
  });

  window.addEventListener('scroll', function() {
    const textElements = document.querySelectorAll('p');
    const windowHeight = window.innerHeight;
  
    textElements.forEach(text => {
      const textTop = text.getBoundingClientRect().top;
  
      if (textTop < windowHeight) {
        text.classList.add('fade-in');
      } else {
        text.classList.remove('fade-in');
      }
    });
  });

  window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;
    
    ['p', 'h2', 'h3', 'h4', 'h5', 'h6', 'a'].forEach(selector => {
      const elements = document.querySelectorAll(selector);
    
      elements.forEach((element, index) => {
        // Skip the first h1 tag
        if (selector === 'h1' && index === 0) {
          return;
        }
  
        const elementTop = element.getBoundingClientRect().top;
    
        if (elementTop < windowHeight) {
          element.classList.add('fade-in');
        } else {
          element.classList.remove('fade-in');
        }
      });
    });
  });

  return (
    <>
    <div className="Home-page">    
      <div className="landing">
        <div className="landing-content">
          <span className="landing-btn">
            <a href="/contact">Book Now</a>
          </span>
          <span className="verti-pill" onClick={scrollintoview}>
            <span className="verti-pill-inner-circle"></span>
          </span>
        </div>
        <div class="slider">
          <div class="slide">
            <h1>Explore Xperts</h1>
            <video muted autoPlay loop playsInline> 
            <source src={test2} type="video/mp4"/>
            </video>
          </div>
          {/* <div class="slide">
          <video muted autoPlay loop> 
            <source src={test} type="video/mp4"/>
            </video>
          </div> */}
        </div>
      </div>
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          At Explore Xperts, trust is at the core of our ethos. With a commitment to transparency, integrity, and customer satisfaction, we strive to build lasting relationships. Our dedicated team brings expertise, passion, and reliability to every interaction. As your trusted partner, we prioritize your needs, ensuring a seamless experience from start to finish. Discover the confidence that comes with choosing Explore Xperts for all your Tour service needs.
        </p>
      </div>
      <div className="services-container-left">
        <img src={one} alt="/" />
        <div className="services-content slide-in">
          <h1>FESTIVALS TOURS</h1>
          <p>
          Dive into the rhythm of life with our Festival Tours! Immerse yourself in vibrant cultures, colorful traditions, and the pulsating beats of global celebrations. From electrifying music festivals to traditional cultural extravaganzas, our curated tours provide front-row access to the world's most captivating events. Join us for an unforgettable journey filled with joy, camaraderie, and unforgettable memories. Let the festivities begin – explore, dance, and revel in the magic of festivals around the world!
          </p>
        </div>
      </div>
      <div className="services-container-left">
        <div className="services-content slide-in">
          <h1>SPORTS TOURISM</h1>
          <p>
          Fuel your passion for sports with our Sports Tourism packages! Immerse yourself in the excitement of major sporting events across the globe, combining thrilling competitions with cultural exploration. From iconic stadiums to scenic racecourses, our curated tours offer unparalleled access to the world's premier sports destinations. Join fellow enthusiasts for an unforgettable blend of athletic excellence and travel adventures. Elevate your sports experience with us and make memories that go beyond the game!
          </p>
        </div>
        <img src={two} alt="/" />
      </div>
      <div className="services-container-left">
        <img src={three} alt="/" />
        <div className="services-content slide-in">
          <h1>SKYDIVING CERTIFICATION TOURS</h1>
          <p>
          Elevate your adventure with our Skydiving Certification Tours! Soar to new heights as you embark on a thrilling journey to become a certified skydiver. Our expert instructors guide you through the exhilarating world of freefall, ensuring a safe and unforgettable experience. Immerse yourself in the adrenaline-pumping sport while enjoying breathtaking views from above. Join our tours and earn your wings in the most exhilarating way possible – the sky's the limit!
          </p>
        </div>
      </div>
      <div className="services-container-left">
        <div className="services-content slide-in">
          <h1>SUPERCARS HOLIDAY</h1>
          <p>
          Rev up your vacation with our Supercars Holiday experience! Immerse yourself in luxury as you cruise picturesque landscapes in the world's most exotic cars. Our curated itineraries blend high-speed thrills with opulent accommodations, delivering the ultimate fusion of elegance and adrenaline. Unleash the power of these iconic vehicles on scenic routes and make every moment a celebration of speed and style. Elevate your holiday with Supercars, where luxury meets the fast lane!
          </p>
        </div>
        <img src={four} alt="/" />
      </div>
      <div className="services-container-left">
      <img src={six} alt="/" />
        <div className="services-content slide-in">
          <h1>BACKPACKING GROUP TOURS</h1>
          <p>
          Embark on unforgettable adventures with our curated backpacking group tours! Join like-minded travelers as we explore breathtaking destinations together. Our expert guides ensure a seamless experience, combining adventure and camaraderie. Discover hidden gems, forge lasting friendships, and create memories that will last a lifetime. Start your journey with us and make every step an extraordinary adventure!
          </p>
        </div>
      </div>
      <div className="card-container">
        <Cards />  
      </div>
    </div>
    </>
  );
  }

export default Home;


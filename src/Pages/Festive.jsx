import React from "react";

const Festive = () => {
  return (
    <div className="bagpacking-container">
      <div className="bagpacking-content-container">
        <div class="container">
          <input
            type="radio"
            name="slider"
            id="slide-1-trigger"
            class="trigger"
            checked
          />
          <label class="btn" for="slide-1-trigger"></label>
          <input
            type="radio"
            name="slider"
            id="slide-2-trigger"
            class="trigger"
          />
          <label class="btn" for="slide-2-trigger"></label>
          <input
            type="radio"
            name="slider"
            id="slide-3-trigger"
            class="trigger"
          />
          <label class="btn" for="slide-3-trigger"></label>
          <input
            type="radio"
            name="slider"
            id="slide-4-trigger"
            class="trigger"
          />
          <label class="btn" for="slide-4-trigger"></label>

          <div class="slide-wrapper">
            <div id="slide-role">
              <div class="slide slide-1"></div>
              <div class="slide slide-2"></div>
              <div class="slide slide-3"></div>
              <div class="slide slide-4"></div>
            </div>
          </div>
        </div>
        <div className="bp-content">
          <h1>FESTIVALS - CONCERTS TOURS</h1>
          <h3>Explore the world with a group of like-minded travellers</h3>
          <p>Embark on unforgettable adventures with our curated backpacking group tours! Join like-minded travelers as we explore breathtaking destinations together. Our expert guides ensure a seamless experience, combining adventure and camaraderie. Discover hidden gems, forge lasting friendships, and create memories that will last a lifetime. Start your journey with us and make every step an extraordinary adventure!</p>
          <a href="/progress">Book Now</a>
        </div>  
      </div>
    </div>
  );
};

export default Festive;
import React from 'react';
import Home from './Pages/Home';
import Progress from './Pages/progress';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Helmet } from 'react-helmet';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Backpacking from './Pages/Backpacking';
import Experiences from './Pages/Experiences';
import Skydiving from './Pages/Skydiving';
import Festive from './Pages/Festive';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Helmet>
          <title>Explore Xperts | Crafting Journey's Creating Memories</title>
          <meta name='description' content='Explore Xperts is your exclusive platform for uncovering and seamlessly booking an array of extraordinary, handcrafted experiences.' />
          <meta name='keywords' content=' Explore Xperts, Explore, Xperts, Explore Xperts.in, Explore Xperts.com, ExploreXperts.in,  ExploreXperts.com, exploreexperts.in, exploreexperts.com, explore, experts, exploreexperts ,Travel, Hiking, concert, DJ, Party, Sports, 
          events, Booking, Hotels, Hotel Booking, Ticket Booking, Festival Tours, Sports Tourism, Skydiving Certification Tours, Skydiving, Vacation, Travel plan
          bagpacking, tour, treaking, Supercar holiday, holiday, experience, experts, explore, discover, booknow, hidden gems, tomorrowland, cricket, festivals' />
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Backpacking" element={<Backpacking />} />
          <Route path="/Experiences" element={<Experiences />} />
          <Route path="/Skydiving" element={<Skydiving />} />
          <Route path="/Festive" element={<Festive />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

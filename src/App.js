import React from 'react';
import './index.css';
import aph from './images/lwh.png';
// import apit from './images/apti.png';
import kebab from './images/food.jpg';
import can from './images/TIME.png';
import travel from'./images/rapido.png';
import real from'./images/real.png';
import radio from './images/radio.jpeg';
import rice from './images/Rice.png';
import geoias from'./images/geoias.jpeg';
import sconto from'./images/sconto.jpeg';
import int from'./images/intrainz.jpeg';
import winni from'./images/winni.png';
import kolkata from'./images/kolkata.png';
import kwik from'./images/kwik.png';
import vip from'./images/vip.png';
import game from'./images/game.png';

const App = () => {
  const teamMembers = [
    {
      name: 'Learning While Travelling',
      role: 'Learning  Partner',
      bio: 'An edutour program is a type of educational tour that combines travel and learning opportunities',
      image: aph,
    },
    {
      name: 'Sconto',
      role: 'Youth Partner',
      bio: 'Sconto is bridging the gap between the world largest Student Tribe and the bussiness ',
      image: sconto,
    },
    {
      name: 'Kolkata Oikkotaan',
      role: 'Promotion Partner',
      bio: 'Kolkata,s Photography Art & Culture',
      image: kolkata,
    },
    {
      name: 'T.I.M.E',
      role: 'Eductation  Partner',
      bio: 'TIME Institute offers entrance coaching for CAT, GATE, IPM, CLAT, BBA, BANK PO, SSC CGL, GRE, GMAT',
      image: can,
    },
    {
      name: 'Intrainz',
      role: 'Eductation  Partner',
      bio: 'Igniting a brighter future',
      image: int,
    },
    {
      name: 'Virtulaism',
      role: 'Gaming  Partner',
      bio: 'Igniting a Gaming  future',
      image: game,
    },
    {
      name: 'MOJS',
      role: 'Food Partner',
      bio: 'Food and Beverages',
      image: kebab,
    },
    {
      name: 'The Beverage Movement',
      role: 'The Beverage Partner',
      bio: 'We Serve the best',
      image: vip,
    },
    {
      name: 'Winni',
      role: 'Celebrtation Partner',
      bio: 'Celebrate Relations',
      image: winni,
    },
    {
      name: 'Kwikpic',
      role: 'Photo Sharing  Partner',
      bio: 'AI based photo sharing App',
      image: kwik,
    },
    {
      name: 'Rapido ',
      role: 'Travel Partner',
      bio: 'Indian bike taxi',
      image: travel,
    },
    {
      name: 'Real 2 Real',
      role: 'Merchandise  Partner',
      bio: 'We Customize Everything',
      image: real,
    },
    {
      name: '91.9 Friends fm',
      role: 'Radio Partner',
      bio: 'Frequency friends ki',
      image: radio,
    },
    {
      name: 'GEO IAS',
      role: 'Eductation  Partner',
      bio: 'It,s About Quality',
      image: geoias,
    },
    {
      name: 'RICE',
      role: 'Eductation Partner',
      bio: 'Together in Success',
      image: rice,
    },
    
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Meet Our Honorable Sponsors for Safalya'2K23</h1>
      </header>
      <div className="carousel-container">
        <div className="carousel">
          <div className="carousel-track">
            {teamMembers.map((card, index) => (
              <div key={index} className="card">
                <img src={card.image} alt={card.name} className="card-image" />
                <div className="card-content">
                  <h2>{card.name}</h2>
                  <p>{card.role}</p>
                  <p>{card.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

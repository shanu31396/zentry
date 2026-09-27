import React, { useState } from 'react';
import './App.css'; 

const Header = () => (
  <header>
    <div className="head-left">
      <img src="/img/logo.png" alt="logo" />
      <button>Products</button>
    </div>
    <div className="head-right">
      <p><a href="#">NEXUS</a></p>
      <p><a href="#">VAULT</a></p>
      <p><a href="#">ABOUT</a></p>
      <p><a href="#">SERVICES</a></p>
      <p><a href="#">CONTACT</a></p>
    </div>
  </header>
);

const Hero = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const movieList = [
    '/videos/hero-1.mp4',
    '/videos/hero-2.mp4',
    '/videos/hero-3.mp4',
    '/videos/hero-4.mp4'
  ];

  const playNextVideo = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % movieList.length);
  };

  return (
    <section className="hero-section autoBlur">
      <div className="hero-vid">
        <video 
          key={movieList[videoIndex]} 
          autoPlay 
          muted 
          playsInline 
          className="hero-video"
          onEnded={playNextVideo}
        >
          <source src={movieList[videoIndex]} type="video/mp4" />
        </video>
        <div className="hero-info">
          <h1>REDEFINE</h1>
          <p>Enter the metagame Layer Unleash the Play Economy</p>
          <button>Watch Trailer</button>
        </div>
        <h1 className="gaming-text">Gaming</h1>
        <div className="next-btn" onClick={playNextVideo}>
          NEXT
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section className="about-section">
    <p>Welcome to Zentry</p>
    <div className="autoBlur">
      <h1>DISCOVER THE WORLD'S LARGEST SHARED ADVENTURE</h1>
    </div>
    <img className="stones-img" src="/img/stones.png" alt="stones-image" />
    <div className="image-box autoTakeFull">
      <img src="/img/about.webp" alt="about-img" />
    </div>
    <h4>Game of Games begins-your life, now an epic MMORPG</h4>
    <h5>Zentry unites every player from countless games and platforms, both digital and physical, into a unified Play Economy</h5>
  </section>
);

const Info = () => {
  const cards = [
    { title: 'RADIANT', desc: 'An anime and gaming-inspired NFT collection - the IP primed for expansion.', video: '/videos/feature-1.mp4', hasButton: true },
    { title: 'ZIGMA', desc: 'A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.', video: '/videos/feature-2.mp4', hasButton: true },
    { title: 'NEXUS', desc: 'A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.', video: '/videos/feature-3.mp4', hasButton: true },
    { title: 'AZUL', desc: 'A cross-world AI Agent - elevating your gameplay to be more fun and productive.', video: '/videos/feature-4.mp4', hasButton: true }
  ];

  return (
    <section className="info-section">
      <h3>Into the Metagame Layer</h3>
      <p>A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.</p>
      <div className="info-cards">
        {cards.map((card, idx) => (
          <div className="card autoDisplay" key={idx}>
            <h1>{card.title}</h1>
            <p>{card.desc}</p>
            <video src={card.video} autoPlay loop muted playsInline />
            {card.hasButton && <button>COMING SOON</button>}
          </div>
        ))}
        <div className="card autoDisplay">
          <video src="/videos/feature-5.mp4" autoPlay loop muted playsInline />
        </div>
        <div className="card autoDisplay">
          <h1>MORE COMING SOON</h1>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section className="contact-section">
    <p>Join Zentry</p>
    <div className="autoBlur">
      <h1>LET'S BUILD THE NEW ERA OF GAMING TOGETHER</h1>
    </div>
    <button>CONTACT US</button>
    <img className="img1" src="/img/swordman.webp" alt="contact-img" />
    <img className="img2" src="/img/contact-1.webp" alt="contact-img" />
    <img className="img3" src="/img/contact-2.webp" alt="contact-img" />
  </section>
);

const Footer = () => (
  <section className="footer">
    <p>&copy;Nova 2025. All rights reserved</p>
    <ul>
      <li><a href="#"><i className='bx bxl-youtube'></i></a></li>
      <li><a href="#"><i className='bx bxl-twitter' ></i></a></li>
      <li><a href="#"><i className='bx bxl-github' ></i></a></li>
      <li><a href="#"><i className='bx bxl-linkedin' ></i></a></li>
    </ul>
    <p>Privacy Policy</p>
  </section>
);

export default function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Info />
      <Contact />
      <Footer />
    </div>
  );
}
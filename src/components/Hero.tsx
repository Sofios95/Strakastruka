import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Αν έχεις το βίντεο σε mp4, βάλ'το στα assets */}
      <div className="video-docker">
        <video 
          className="background-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="hero-content">
        <h4 className="hero-subtitle">Music Joint</h4>
        <h1 className="hero-title">JOIN US</h1>
        <button className="hero-btn">EXPLORE THE BEATS</button>
      </div>
    </section>
  );
};

export default Hero;
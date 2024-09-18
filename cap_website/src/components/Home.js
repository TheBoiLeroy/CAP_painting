import React from 'react';
import backgroundImage from '../assets/pexels-binyaminmellish-186077.jpg'; // Adjust the relative path as necessary

function Home() {
  const sectionStyle = {
    position: 'relative',      // Allows the overlay to sit on top of the background
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% opacity
    zIndex: 1, // Ensures the overlay is above the background image but below the content
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,  // Ensures the text stays above the overlay
  };

  return (
    <section id="home" style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h2>Home Section</h2>
        <p>CAP Painting is your trusted local painting contractor, specializing 
        in top-quality interior and exterior house painting. Call us today for competitive pricing!</p>
      </div>
    </section>
  );
}

export default Home;
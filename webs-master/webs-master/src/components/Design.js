// Design.js
import React from 'react';
import './Design.css';

const Design = () => {
  return (
    <div className="design-container">
      <header>
        <h1>Design Inspiration</h1>
        <p>Explore the world of creative design and innovation.</p>
      </header>

      <section className="design-gallery">
        <h2>Featured Designs</h2>
        <div className="design-images">
          {/* Display some design images here */}
          <img src="https://i.pinimg.com/236x/56/10/19/5610195ae334cf5f7f1f4e6893eb4d4e.jpg" alt="Innovation of Home" />
          <img src="https://i.pinimg.com/236x/4c/85/e0/4c85e0f6a1062cf92acff2b12a266eff.jpg" alt="Modern villa 2" />
          <img src="https://i.pinimg.com/236x/c8/21/95/c82195bc26ab200b3b9426139847d7c5.jpg" alt="Pic Art" />
          {/* Add more design images as needed */}
        </div>
      </section>

      <section className="call-to-action">
        <p>Ready to be inspired? Dive into the world of design creativity!</p>
        <button>Explore Designs</button>
      </section>
    </div>
  );
};

export default Design;

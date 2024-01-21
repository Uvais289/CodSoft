import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header>
        <h1>CanvasGallery</h1>
        <p>Your Gateway to Artistic Inspiration</p>
      </header>

      <section className="intro-section">
        <p>
          Welcome to CanvasGallery, where creativity knows no bounds. Immerse yourself in a world of
          visual wonders, showcasing a diverse collection of beautiful images from talented artists
          around the globe.
        </p>
        <p>
          Whether you're an art enthusiast, a photography lover, or simply seeking inspiration,
          CanvasGallery provides a curated space to explore, appreciate, and share the beauty of
          visual artistry.
        </p>
      </section>

      <section className="featured-section">
        <h2>Featured Images</h2>
        <div className="image-gallery">
          {/* Display some beautiful images here */}
          <img
            src="https://i.pinimg.com/474x/bf/15/d7/bf15d77b458a31789d5d146ddd1ea808.jpg"
            alt="Morning vibes"
          />
          <img src="https://i.pinimg.com/474x/12/29/26/122926b7424fc6ce92abf79860fa324f.jpg" alt="Furry night" />
          <img src="https://i.pinimg.com/474x/32/d6/49/32d649d58955285418ed98ea12daecda.jpg" alt="Heart" />
          {/* Add more images as needed */}
        </div>
      </section>

      <section className="video-section">
        <h2>Featured Videos</h2>
        <div className="video-gallery">
          {/* Embed videos from various sources */}
          <video width="560" height="315" controls>
            <source
              src="https://youtube.com/shorts/XLlm-CHMeNA?si=KD3iMqBYwmXqLG-3"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="additional-content">
        <h2>Discover More</h2>
        <p>
          Explore our vast collection of artworks, ranging from paintings and photographs to
          sculptures and digital art. CanvasGallery is more than just a gallery; it's a celebration of
          human creativity.
        </p>
      </section>
    </div>
  );
};

export default Home;

// Gallery.js
import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    'https://i.pinimg.com/474x/c5/a5/7d/c5a57dfa54f533a74aeb308ed775ee42.jpg',
    'https://i.pinimg.com/474x/1b/b6/7f/1bb67f61c5535c657e2b0ba1a5214963.jpg',
    'https://i.pinimg.com/474x/2c/f7/a1/2cf7a1129b89c23bf3ce7b74fd7087f8.jpg',
    'https://i.pinimg.com/474x/a8/5c/aa/a85caa9695befd11aaec566cf5c56159.jpg',
    'https://i.pinimg.com/474x/f5/dd/7a/f5dd7a128c0ac3091bf86f30692ee875.jpg',
    'https://i.pinimg.com/474x/4b/71/7e/4b717e3283f3740d80b8b777fc433c4d.jpg',
    'https://i.pinimg.com/474x/8b/fb/27/8bfb273ccfa60c13b60e74f0078a1b37.jpg',
    'https://i.pinimg.com/474x/12/38/53/123853b709953dea968a0bc122d25d57.jpg',
    'https://i.pinimg.com/474x/52/2c/41/522c41d42300abe161d1ddbaa5f7b7e3.jpg',
    'https://i.pinimg.com/474x/14/54/a6/1454a638871bca4cab1b6164c82e04cf.jpg',
    'https://i.pinimg.com/474x/fe/34/8f/fe348f8dd4ae30ebc45363c5ce66e3bf.jpg',
    'https://i.pinimg.com/474x/53/f3/90/53f3909226868a4b8df0d0bbebfa0aff.jpg',
    'https://i.pinimg.com/474x/4a/f9/e8/4af9e80014fb5d92e259c3a566eeadc2.jpg',
    'https://i.pinimg.com/474x/2a/f3/2e/2af32e6f4fa4ce5daaa7918113c55118.jpg',
    'https://i.pinimg.com/474x/80/07/f7/8007f78c86cfe53b9fbfd72507f4038a.jpg',
    'https://i.pinimg.com/474x/da/c9/c8/dac9c8e1b02bd9c6ec9185de0d484ab5.jpg',
    'https://i.pinimg.com/474x/d0/1f/64/d01f641b091c11fdbf87bcb4811746b3.jpg',
    'https://i.pinimg.com/474x/f4/40/90/f44090c00bf2dcaa717124a3bef7dd53.jpg',
    'https://i.pinimg.com/474x/ee/56/19/ee5619518232cbe75e03d4850139cddb.jpg',
    'https://i.pinimg.com/474x/9d/16/de/9d16dedf5862d5dacf66d4f6695b4878.jpg',
    'https://i.pinimg.com/474x/13/4c/f5/134cf58a0999d31ed6f4bfe9269c3a96.jpg',
    'https://i.pinimg.com/474x/79/3c/92/793c927f961b1502e88d9f797af1493a.jpg',
    'https://i.pinimg.com/474x/7d/96/96/7d969683964f631dfb7e3a52b3765fdf.jpg',
    'https://i.pinimg.com/736x/8a/16/76/8a16764c2fe1e6b1bdad0f0b4b543790.jpg',
    'https://i.pinimg.com/474x/31/e1/f4/31e1f402308af2e2e114f75162f56365.jpg',
    'https://i.pinimg.com/474x/0a/8b/04/0a8b046a4210646cdf419f2372248d5b.jpg',
    'https://i.pinimg.com/474x/40/6c/ab/406cabdeef83adf3eac070054081b002.jpg',
    'https://i.pinimg.com/474x/13/77/24/1377247dba3004b3efd4bdf599379bd1.jpg',
    'https://i.pinimg.com/474x/88/3e/8b/883e8b2995f83acc37eebf601d4958d9.jpg',
    'https://i.pinimg.com/474x/73/db/44/73db447000e288ef8c7e9d4eafc6dd7c.jpg'
    // Add more images
  ];

  return (
    <div className="gallery-container">
      <div className="image-gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

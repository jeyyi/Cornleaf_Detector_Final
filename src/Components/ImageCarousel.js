import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the CSS

const ImageCarousel = ({ items }) => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <div key={index} className='flex flex-col mx-auto'>
          <img src={item.Url} alt={item.Label} className='w-64 h-64 object-cover'/>
          <div className='divider'/>
          <h3 className="mt-5 text-lg font-semibold">{item.Label}</h3>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

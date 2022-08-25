/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import FeaturedHotel from '../components/FeaturedHotel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const FeaturedPage = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const { data } = useSelector((state) => state.MostRecent);

  return (
    <div className="featured-container">
      <div className="featured-heading">
        <h1>Featured Hotels</h1>
        <p>Please select a Hotel</p>
      </div>
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        keyBoardControl={true}
        customTransition="all .5"
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((hotel) => (
          <FeaturedHotel hotel={hotel} key={hotel.id} />
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedPage;

/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';

const FeaturedHotel = ({ hotel }) => {
  const style = {
    color: 'grey',
    margin: '2px',
    fontSize: '1.9em',
    cursor: 'pointer',
  };
  return (
    <div className="ft-card">
      <div className="img-container">
        <img src={hotel.image[0]} alt={hotel.name} className="carousel-image" />
      </div>
      <Link to={`/hotel/${hotel.id}`}>
        <p className="card-title">{hotel.name}</p>
      </Link>
      <p className="line">-----------------------</p>
      <div className="description-container">
        <p className="card-description">{hotel.description}</p>
      </div>
      <div className="card-icon">
        <span>
          <RiFacebookCircleLine style={style} />
        </span>
        <span>
          <TiSocialTwitterCircular style={style} />
        </span>
        <span>
          <RiInstagramLine style={style} />
        </span>
      </div>
    </div>
  );
};

export default FeaturedHotel;

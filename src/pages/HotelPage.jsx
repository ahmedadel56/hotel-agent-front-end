import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HotelList from '../components/HotelList';

const HomePage = () => {
  const { data, status } = useSelector((state) => state.Hotel);
  return (
    <div className="featured-container">
      <div className="list-heading">
        <h1>Hotel List</h1>
      </div>
      {status === 'successfully loaded' && (
        <>
          <Link to="/add-hotel">
            <button type="button" className="addNewBtn ">
              Add new Hotel
            </button>
          </Link>
          <div className="hotel-list">
            {data.map((hotel) => (
              <HotelList hotel={hotel} key={hotel.id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;

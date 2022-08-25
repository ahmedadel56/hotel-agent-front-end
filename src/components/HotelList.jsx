/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { AiOutlineDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { deleteHotel } from '../redux/Hotel/Hotel';
import Alert from './Alert';

const HotelList = ({ hotel }) => {
  const style = {
    color: 'grey',
    margin: '2px',
    fontSize: '1.9em',
    cursor: 'pointer',
  };
  const btnStyle = {
    color: 'red',
    margin: '0.5px',
    fontSize: '1.5em',
  };
  const dispatch = useDispatch();
  const [success, setSucces] = useState(false);
  useEffect(() => {
    if (success) {
      const timeId = setTimeout(() => {
        setSucces(false);
      }, 3000);

      return () => {
        clearTimeout(timeId);
      };
    }
  }, [success]);
  
  return (
    <><>
      {success ? (
        <Alert type="success">
          <p>Hotel Removed successfully</p>
        </Alert>
      ) : null}
    </><div className="ft-card">
        <div className="img-container">
          <img src={hotel.image[0]} alt={hotel.name} className="carousel-image" />
        </div>
        <button
          type="button"
          className="rmBtn"
          onClick={() => {
            setSucces(true);
            const timeId = setTimeout(() => {
              dispatch(deleteHotel(hotel.id));
            }, 1500);
            return () => {
              clearTimeout(timeId);
            };
          } }
        >
          <AiOutlineDelete style={btnStyle} />
        </button>
        <Link to={`/hotel/log/${hotel.id}`}>
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
      </div></>
  );
};

export default HotelList;

HotelList.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
};

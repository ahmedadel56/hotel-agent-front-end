/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteHotelReservation } from '../redux/reservations/reservation';

const ReservationList = ({ reservation }) => {
  const { data } = useSelector((state) => state.Hotel);
  const dispatch = useDispatch();
  const hotel = data.filter((hotel) => hotel.id === reservation.hotel_id);

  return (
    <div className="res-card">
      <div className="reservation-card">
        <div className="card-top">
          <h2>{hotel[0].name}</h2>
          <h4>{reservation.city}</h4>
        </div>
        <div className="card-bottom">
          <p>Date: {reservation.date}</p>
          <p>Number of Days: {reservation.number_of_days}</p>
          <p>Number of Guests: {reservation.number_of_guests}</p>
          <p>Number of Rooms: {reservation.number_of_rooms}</p>
        </div>
      </div>
      <button
        type="button"
        className="cancel-reservation"
        onClick={() =>
          dispatch(deleteHotelReservation(reservation.id))? window.location.reload():null}
      >Cancel Reservation
      </button>
    </div>
  );
};

export default ReservationList;

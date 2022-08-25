const ADD_RESERVATION = 'HotelAgentFrontEnd/reservations/ADD_RESERVATION';
const VIEW_RESERVATIONS = 'HotelAgentFrontEnd/reservations/VIEW_RESERVATION';
const DELETE_RESERVATION = 'HotelAgentFrontEnd/reservations/DELETE_RESERVATION';

const initialState = { status: 'No Data', data: [] };

export const addReservation = (reservation) => ({
  type: ADD_RESERVATION,
  reservation,
});
export const viewReservetions = (reservation) => ({
  type: VIEW_RESERVATIONS,
  reservation,
});
export const deleteReservation = (reservation) => ({
  type: DELETE_RESERVATION,
  reservation,
});

export const listReservations = () => async (dispatch) => {
  fetch(
    `https://infinite-falls-52470.herokuapp.com/v1/users/${localStorage.getItem(
      'userId',
    )}/reservations`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  )
    .then((data) => data.json())
    .then((data) => {
      dispatch(viewReservetions(data));
    })
    .catch((error) => {
      throw error;
    });
};

export const addHotelReservation = (data) => async (dispatch) => {
  fetch(
    `https://infinite-falls-52470.herokuapp.com/v1/users/${localStorage.getItem(
      'userId',
    )}/reservations`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        city: data.country,
        date: data.date,
        number_of_days: data.number_of_days,
        number_of_rooms: data.number_of_rooms,
        number_of_guests: data.number_of_guests,
        hotel_id: parseInt(data.hotel_id, 10),
      }),
    },
  )
    .then((data) => data.json())
    .then((data) => {
      dispatch(addReservation(data));
    })
    .then(() => {
      dispatch(listReservations());
    })
    .catch((error) => {
      throw error;
    });
};

export const deleteHotelReservation = (id) => async (dispatch) => {
  fetch(
    `https://infinite-falls-52470.herokuapp.com/v1/users/${localStorage.getItem(
      'userId',
    )}/reservations/${id}`,
    {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    },
  )
    .then((data) => data.json())
    .then((data) => {
      dispatch(deleteReservation(data));
    })
    .then(() => {
      dispatch(listReservations());
    })
    .catch((error) => {
      throw error;
    });
};

const ReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return {
        data: action.reservation,
        status: 'Reservation successfully added',
      };
    case VIEW_RESERVATIONS:
      return {
        data: action.reservation,
        status: 'Reservations successfully loaded',
      };
    case DELETE_RESERVATION:
      return {
        data: action.reservation,
        status: 'Reservation  successfully Deleted',
      };
    default:
      return state;
  }
};

export default ReservationReducer;

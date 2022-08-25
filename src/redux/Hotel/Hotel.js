import { fetchMostRecentHotels } from '../MostRecent/MostRecent';

const LIST_HOTEL = 'HotelAgentFrontEnd/Hotel/LIST_HOTEL';
const ADD_HOTEL = 'HotelAgentFrontEnd/Hotel/ADD_HOTEL';
const VIEW_HOTEL = 'HotelAgentFrontEnd/Hotel/VIEW_HOTEL';
const DELETE_HOTEL = 'HotelAgentFrontEnd/Hotel/DELETE_HOTEL';

const initialState = { status: 'No Data', data: [] };

export const dataSucces = (hotel) => ({
  type: LIST_HOTEL,
  hotel,
});
export const addHotelSucces = (hotel) => ({
  type: ADD_HOTEL,
  hotel,
});
export const viewHotelSucces = (hotel) => ({
  type: VIEW_HOTEL,
  hotel,
});
export const deleteHotelSucces = (hotel) => ({
  type: DELETE_HOTEL,
  hotel,
});

export const listHotel = () => async (dispatch) => {
  fetch(
    `https://infinite-falls-52470.herokuapp.com/v1/users/${localStorage.getItem('userId')}/hotels`,
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
      dispatch(dataSucces(data));
    })
    .catch((error) => {
      throw error;
    });
};

export const addHotel = (data) => async (dispatch) => {
  fetch(
    `https://infinite-falls-52470.herokuapp.com/v1/users/${localStorage.getItem('userId')}/hotels`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        cost: data.cost,
        address: data.address,
        image: [...data.image],
      }),
    },
  )
    .then((data) => data.json())
    .then((data) => {
      dispatch(addHotelSucces(data));
    })
    .then(() => {
      dispatch(fetchMostRecentHotels());
      dispatch(listHotel());
    })
    .catch((error) => {
      throw error;
    });
};
export const viewHotel = () => async (dispatch) => {
  fetch('https://infinite-falls-52470.herokuapp.com/v1/users/2/hotels/2', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  })
    .then((data) => data.json())
    .then((data) => {
      dispatch(viewHotelSucces(data));
    })
    .catch((error) => {
      throw error;
    });
};
export const deleteHotel = (hotel) => async (dispatch) => {
  fetch(
    `https://infinite-falls-52470.herokuapp.com/v1/users/${localStorage.getItem(
      'userId',
    )}/hotels/${hotel}`,
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
      dispatch(deleteHotelSucces(data));
    })
    .then(() => {
      dispatch(fetchMostRecentHotels());
      dispatch(listHotel());
    })
    .catch((error) => {
      throw error;
    });
};

const HotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_HOTEL:
      return { data: action.hotel, status: 'successfully loaded' };
    case ADD_HOTEL:
      return { data: action.hotel, status: 'Hotel successfully added' };
    case VIEW_HOTEL:
      return { data: action.hotel, status: 'Hotel successfully loaded' };
    case DELETE_HOTEL:
      return { data: action.hotel, status: 'Hotel successfully Deleted' };
    default:
      return state;
  }
};

export default HotelReducer;

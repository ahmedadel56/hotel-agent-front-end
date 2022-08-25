import { listReservations } from '../Reservations/Reservation';
import { listHotel } from '../Hotel/Hotel';

const CREATE_USER = 'HotelAgentFrontEnd/User/CREATE_USER';
const LOGIN_USER = 'HotelAgentFrontEnd/User/LOGIN_USER';
const LOG_OUT = 'HotelAgentFrontEnd/User/LOG_OUT';

const initialState = { status: 'Not created', data: [] };

const setToken = (token, id) => {
  localStorage.setItem('token', token);
  localStorage.setItem('userId', id);
  localStorage.setItem('lastLoginTime', new Date(Date.now()).getTime());
};

const deleteToken = () => {
  localStorage.setItem('userId', null);
  localStorage.setItem('token', null);
  localStorage.setItem('lastLoginTime', null);
};

export const success = (user) => ({
  type: CREATE_USER,
  user,
});

export const loginSuccess = (user) => ({
  type: LOGIN_USER,
  user,
});

export const logoutSuccess = () => ({
  type: LOG_OUT,
});

export const logout = () => async (dispatch) => {
  dispatch(logoutSuccess());
  deleteToken();
};

export const createUser = (data) => async (dispatch) => {
  fetch('https://infinite-falls-52470.herokuapp.com/v1/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(success(res));
      if (res.ok) {
        setToken(res.content.auth_token);
      }
    })
    .catch((error) => {
      throw error;
    });
};

export const logInUser = (data) => async (dispatch) => {
  fetch('https://infinite-falls-52470.herokuapp.com/v1/auth/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch(loginSuccess(res));
      console.log(res);
      setToken(res.content.auth_token, res.user_id);
    })
    .then(() => {
      dispatch(listHotel());
      dispatch(listReservations());
    })
    .catch((error) => {
      throw error;
    });
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { data: action.user, status: 'Created successfully' };
    case LOGIN_USER:
      return { data: action.user, status: 'Loged In successfully' };
    case LOG_OUT:
      return { data: [], status: 'Loged Out successfully' };
    default:
      return state;
  }
};

export default UserReducer;

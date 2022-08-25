import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import ReservationReducer from './Reservations/Reservation';
import mostRecentReducer from './MostRecent/MostRecent';
import UserReducer from './User/User';
import HotelReducer from './Hotel/Hotel';

const rootReducer = combineReducers({
  MostRecent: mostRecentReducer,
  User: UserReducer,
  Hotel: HotelReducer,
  Reservation: ReservationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;

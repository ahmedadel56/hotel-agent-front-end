import './App.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { fetchMostRecentHotels } from './redux/MostRecent/MostRecent';
import { listReservations } from './redux/Reservations/Reservation';
import SignUp from './components/SignUp';
import Login from './components/Login';
import LogOutNavBar from './components/LogOutNavBar';
import HotelPage from './pages/HotelPage';
import DetailsPage from './pages/DetailsPage';
import FeaturedPage from './pages/FeaturedPage';
import ErrorPage from './pages/ErrorPage';
import ReservePage from './pages/ReservePage';
import AddHotel from './pages/AddHotelPage';
import { listHotel } from './redux/Hotel/Hotel';
import ReserveDefault from './components/ReserveDefault';
import DetailsHotelLog from './components/DetailsHotelLog';
import ReserveDefaultLog from './components/ReserveDefaultLog';
import ReservationsPage from './pages/ReservationsPage';
import Protected from './components/Protected';
import Contributors from './pages/Contributers/Contributers';

const App = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const { status } = useSelector((state) => state.Hotel);
  /* eslint-disable */

  const getSatus = async () => {
    status
    if (status === 'No Data' && localStorage.getItem('userId') === 'null'){
      setisLoggedIn(false);
    } else {
      setisLoggedIn(true);
    }
  };

  console.log(isLoggedIn);

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchMostRecentHotels());
      await dispatch(listHotel());
      await dispatch(listReservations());
      await getSatus();
    };

    getData();
  }, [status]);

    return (
      <>
      <Router>
        { isLoggedIn && localStorage.getItem('userId') !== 'null' ? (
          <Navbar />
        ):(
          <LogOutNavBar />
        )}
        <Routes>
          <Route path="/" element={<FeaturedPage />} />
          <Route path="/reserve" element={<Protected isLoggedIn={isLoggedIn}> <ReservePage /> </Protected>} />
          <Route path="/reserve/:name" element={<Protected isLoggedIn={isLoggedIn}> <ReserveDefault /> </Protected>} />
          <Route path="/reserve/log/:name" element={<Protected isLoggedIn={isLoggedIn}> <ReserveDefaultLog /> </Protected>} />
          <Route path="/hotel" element={<Protected isLoggedIn={isLoggedIn}> <HotelPage /> </Protected>} />
          <Route path="/hotel/:name" element={ <DetailsPage />} />
          <Route path="/hotel/log/:name" element={<Protected isLoggedIn={isLoggedIn}> <DetailsHotelLog /> </Protected>} />
          <Route path="/add-hotel" element={<Protected isLoggedIn={isLoggedIn}> <AddHotel /> </Protected>} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/reservations" element={<Protected isLoggedIn={isLoggedIn}> <ReservationsPage /> </Protected>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/contributors/*" element={<Contributors />} />
        </Routes>
      </Router>
      </>
    );
};

export default App;

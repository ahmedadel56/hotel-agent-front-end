import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import ContributorDetails from './ContributorDetails';
import ahmad from './cont-image/ahmad.jpg';
import jorge from './cont-image/jorge.jpg';
import sediq from './cont-image/sediq.jpg';

const Contributers = () => (
  <div className="App cont-main">
    <div className="cont-container">
      <div>
        <NavLink to="ahmad">
          <div className="img-container">
            <img src={ahmad} alt="Ahmad" />
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to="jorge">
          <div className="img-container">
            <img src={jorge} alt="jorge" />
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to="sediq">
          <div className="img-container">
            <img src={sediq} alt="sediq" />
          </div>
        </NavLink>
      </div>
    </div>

    <Routes>
      <Route path=":slug" element={<ContributorDetails />} />
    </Routes>
  </div>
);

export default Contributers;

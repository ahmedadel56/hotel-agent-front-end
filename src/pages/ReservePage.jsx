/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import ReactDatePicker from 'react-datepicker';
import { addHotelReservation } from '../redux/Reservations/Reservation';
import 'react-datepicker/dist/react-datepicker.css';
import countries from '../components/CountryPicker';
import background from '../img/background.jpg';
import Alert from '../components/Alert';

const ReservePage = () => {
  const dispatch = useDispatch();
  const [success, setSucces] = useState(false);
  useEffect(() => {
    if (success) {
    const timeId = setTimeout(() => {
      setSucces(false)
    }, 1500)

    return () => {
      clearTimeout(timeId)
    }
    }
  }, [success]);

  const {
    register, formState: { errors }, handleSubmit, control,
  } = useForm({
    defaultValues: {
      user_id: localStorage.getItem('userId'),
    },
  });
  const onSubmit = (data, e) => {
    dispatch(addHotelReservation(data));
    e.target.reset();
    setSucces(true);
  };

  const { data } = useSelector((state) => state.MostRecent);

  const countryToFlag = (isoCode) => (typeof String.fromCodePoint !== 'undefined'
    ? isoCode
      .toUpperCase()
      .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode);

  return (
    <><>
      {success ? (<Alert type="success">
        <p>Reservation added successfully</p>
      </Alert>) : null}
    </><div
      className="reserve-container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
        <>
          <div className="reserve-heading">
            <h1>BOOK A HOTEL</h1>
            <hr />
            <p>Please select a Hotel</p>
          </div>
          <div className="reserve-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <section className="countries-container">
                <select {...register('country', { required: true })}>
                  {countries.map((item) => (
                    <option key={item.label} value={item.label}>
                      {item.label}
                      {' '}
                      {countryToFlag(item.code)}
                    </option>
                  ))}
                </select>
              </section>
              <section className="date-container">
                <Controller
                  control={control}
                  name="date"
                  rules={{ required: true }}
                  render={({
                    field: {
                      onChange, onBlur, value, ref,
                    },
                  }) => (
                    <ReactDatePicker
                      className="date-picker"
                      onChange={onChange}
                      onBlur={onBlur}
                      selected={value}
                      placeholderText="Select date" />
                  )} />
                {errors.date?.type === 'required' && <span>Date is required</span>}
              </section>
              <section className="options-container">
                <div className="login-form">
                  <input
                    placeholder="🏖 Number of days"
                    {...register('number_of_days', {
                      required: true,
                      min: 1,
                      pattern: /^[0-9]*$/,
                    })} />
                    <p>
                  {errors.number_of_days?.type === 'required' && <span>Number of days is required</span>}
                  {errors.number_of_days?.type === 'min' && (
                    <span>Number of days must be more than 0</span>
                  )}
                  {errors.number_of_days?.type === 'pattern' && (
                    <span>Number of days must be numeric</span>
                  )}
                  </p>
                </div>
                <div className="login-form">
                  <input
                    placeholder="🏘 Number of rooms"
                    {...register('number_of_rooms', {
                      required: true,
                      min: 1,
                      pattern: /^[0-9]*$/,
                    })} />
                    <p>
                  {errors.number_of_rooms?.type === 'required' && <span>Number of rooms is required</span>}
                  {errors.number_of_rooms?.type === 'min' && (
                    <span>Number of rooms must be more than 0</span>
                  )}
                  {errors.number_of_rooms?.type === 'pattern' && (
                    <span>Number of rooms must be numeric</span>
                  )}
                  </p>
                </div>
                <div className="login-form">
                  <input
                    placeholder="👥 Number of guests"
                    {...register('number_of_guests', {
                      required: true,
                      min: 1,
                      pattern: /^[0-9]*$/,
                    })} />
                    <p>
                  {errors.number_of_guests?.type === 'required' && <span>Number of guests is required</span>}
                  {errors.number_of_guests?.type === 'min' && (
                    <span>Number of guests must be more than 0</span>
                  )}
                  {errors.number_of_guests?.type === 'pattern' && (
                    <span>Number of guests must be numeric</span>
                  )}
                  </p>
                </div>
              </section>
              <section className="select-hotel-container">
                <label>Select Hotel:</label>
                <select {...register('hotel_id', { required: true })}>
                  {data.map((item) => (
                    <option key={item.name} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </section>
              <section className="submit-container">
                <input type="submit" value="RESERVE" />
              </section>
            </form>
          </div>
        </>
      </div></>
  );
};

export default ReservePage;

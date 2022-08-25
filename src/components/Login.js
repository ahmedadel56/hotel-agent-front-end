/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInUser } from '../redux/User/User';
import { useNavigate } from 'react-router-dom';
import auth from '../img/authentication.jpg';
import Alert from './Alert';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const { register,formState: { errors }, handleSubmit } = useForm();
  const onSubmit =  (data) => {
    setSucces(true);
    const timeId = setTimeout(() => {
      dispatch(logInUser(data)) ? (navigate('/')) : null;
    }, 900);
    return () => {
      clearTimeout(timeId);
    };
  };

  return (
    <><>
      {success ? (
        <Alert type="success">
          <p>Welcome!</p>
        </Alert>
      ) : null}
    </><div
      className="reserve-container"
      style={{
        backgroundImage: `url(${auth})`,
      }}
    >
        <div className="reserve-heading">
          <h1>WELCOME BACK!</h1>
          <hr />
          <p>Sign in to continue</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login-form">
            <input {...register('email', {
              required: "Email address is required",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email address"
              }
            })} placeholder="✉️  email" />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="login-form">
            <input {...register('password')} type={'password'} required minLength={6} placeholder="🔒  password" />
          </div>
          <div className="login-btn">
            <input type="submit" value="SIGN IN" />
          </div>
        </form>
      </div></>
  );
}
/* eslint-enable */

/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addHotel } from '../redux/Hotel/Hotel';
import create from '../img/create.jpg';
import Alert from '../components/Alert';

export default function AddHotel() {
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

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const uploadImage = async (files) => {
    console.log(files);
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append("upload_preset", "f4iaoiyl");
    setLoading(true);
    console.log(...formData)
    await fetch('https://api.cloudinary.com/v1_1/dtaolltra/image/upload', {
      method: 'post',
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      setImages(data.secure_url);
    }
    )
    .catch(err => console.log(err));
    setLoading(false);
  }

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async (data, e) => {
    data.image = [images];
    await dispatch(addHotel(data)); 
    e.target.reset(); 
    setImages([]);
    setSucces(true); 
  }
  return (
    <><>
      {success?  (<Alert type="success">
        <p>Hotel added successfully</p>
      </Alert>) : null}

    </><div
      className="reserve-container"
      style={{
        backgroundImage: `url(${create})`,
      }}
    >
        <div className="reserve-heading">
          <h1>ADD YOUR HOTEL</h1>
          <hr />
          <p>Explore & Discover</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} style={{ float: 'right' }}>
          <div className="login-form">
            <input
              {...register('name', {
                required: true,
                minLength: 4,
                pattern: /^[a-zA-Z]+$/,
              })}
              placeholder="🏠 hotel name" />
              <p>
            {errors.name?.type === 'required' && <span> Hotel name is required</span>}
            {errors.name?.type === 'minLength' && (
              <span>Hotel name must be at least 4 letters long</span>
            )}
            {errors.name?.type === 'pattern' && (
              <span>Hotel name must be letters</span>
            )}
            </p>
          </div>
          <div className="login-form">
            <input
              {...register('description', {
                required: true,
                minLength: 10,
              })}
              placeholder="📄 description" />
              <p>
            {errors.description?.type === 'required' && <span> Hotel description is required</span>}
            {errors.description?.type === 'minLength' && (
              <span>Hotel description must be at least 10 letters long</span>
            )}
            </p>
          </div>
          <div className="login-form">
            <input
              {...register('cost', {
                required: true,
                min: 1,
              })}
              type="number"
              placeholder="cost"
              step={0.01} />
              <p>
            {errors.cost?.type === 'required' && <span>Cost is required</span>}
            {errors.cost?.type === 'min' && (
              <span>Cost must be more than 0</span>
            )}
            </p>
          </div>
          <div className="login-form">
            <input
              {...register('address', {
                required: true,
                minLength: 4,
              })}
              placeholder="🗺 address" />
              <p>
            {errors.address?.type === 'required' && <span> Hotel address is required</span>}
            {errors.address?.type === 'minLength' && (
              <span>Hotel address must be at least 4 letters long</span>
            )}
            </p>
          </div>
          <div className="login-form">
            <input
             type={'file'}
             multiple
             accept="image/*"
              {...register('image', {
                onChange: (e) => uploadImage(e.target.files),
                required: true,
              })}
              placeholder="🎑 image" />
              <p>
            {errors.image?.type === 'required' && <span> Image is required</span>}
            </p>
          </div>
          {loading ? (
            <h3>Loading...</h3>
          ):(
            <img src={images} style={{ width: '300px' }} />
          )}
          <div className="login-btn">
            <input type="submit" value="ADD HOTEL" />
          </div>
        </form>
      </div></>
  );
}

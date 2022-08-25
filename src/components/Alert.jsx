/* eslint-disable */
import React, { useState, useEffect } from 'react';
import css from 'classnames';
import style from './style.module.scss';

const Alert = ({ children, type, message }) => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setIsShow(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  const renderElAlert = function () {
    return React.cloneElement(children);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsShow(false);
  };

  if (!isShow) {
    return null;
  }

  return (
    <div className={css(style.alert, style[type], !isShow && style.hide)}>
      <span className={style.closebtn} onClick={handleClose}>
        &times;
      </span>
      {children ? renderElAlert() : message}
    </div>
  );
};

export default Alert;

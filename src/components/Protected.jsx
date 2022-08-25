import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Protected = ({ children, isLoggedIn }) => {
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate to="/" state={{ from: location }} />
    );
  }

  return children;
};

Protected.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Protected;

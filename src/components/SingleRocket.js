import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import { rocketActions } from '../redux/rockets/rocketsSlice';

const Rocket = ({
  id, rocketName, description, Image, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div><img className="image" src={Image} alt=" " /></div>
      <div className="rocketDetails">
        <h1 className="margin">{rocketName}</h1>
        <p className="description margin">
          <span className="reservation margin">
            {' '}
            {reserved ? 'Reserved' : ' ' }
            {' '}
          </span>
          {description}
        </p>
        <button className={reserved ? 'reservedbutton' : 'reserverocket'} type="button" onClick={() => dispatch(rocketActions.toggleReserved(id))}>
          {' '}
          {reserved ? 'Cancel reservation' : 'Reserve Rocket' }
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  Image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;

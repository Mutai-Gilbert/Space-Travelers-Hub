import { useDispatch } from 'react-redux';
import React from 'react';
import { toggleRocket } from '../redux/rocketsSlice';

const Rocket = ({
  id, rocketName: name, description, flickrImages, reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="image">{flickrImages}</div>
      <div className="rocketDetails">
        <h1>{name}</h1>
        <p className="description">
          <span className="reservation">
            {' '}
            {reserved ? 'Reserved' : ' '}
            {' '}
          </span>
          {description}
        </p>
        <button type="button" onClick={() => dispatch(toggleRocket(id))}>Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rocket; s;

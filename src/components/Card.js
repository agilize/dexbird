import React from 'react'
import PropTypes from 'prop-types';

export const Card = ({ title, children }) => (
  <div className="card">
    <div className="card-header">{ title }</div>
    <div className="card-body">{ children }</div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Card;

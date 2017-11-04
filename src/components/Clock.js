import React from 'react';
import PropTypes from 'prop-types';

export const Clock = ({ time, className }) => (
  <div className={className}>{time.toLocaleTimeString()}</div>
);

Clock.propTypes = {
  time: PropTypes.objectOf(Date).isRequired,
};

export default Clock;

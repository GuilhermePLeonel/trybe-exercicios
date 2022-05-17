
import React from 'react';
import PropTypes from 'prop-types';


class Pokemon extends React.Component {
  render() {
  const { name, type, averageWeight, image } = this.props
  return (
    <div className='card'>
        <p>{name}</p>
        <div>{type}</div>
        <p>{averageWeight}</p>
        <img src={image}alt={name} />
    </div>
  )
  };
}

Pokemon.propTypes = {
  id: PropTypes.string, 
  name: PropTypes.string, 
  type: PropTypes.string, 
  averageWeight: PropTypes.number, 
  image: PropTypes.string
};

export default Pokemon;

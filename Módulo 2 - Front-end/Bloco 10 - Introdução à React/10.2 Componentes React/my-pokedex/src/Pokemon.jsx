import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const { pokemon } = this.props;

    return (
      <div key={ pokemon.id } className="container">
        <div>
          <p>{ pokemon.name }</p>
          <p>{ pokemon.type.split(' ').join(' / ') }</p>
          <p>Average weight: { pokemon.averageWeight.value }
          {' '}
          { pokemon.averageWeight.measurementUnit }</p>
        </div>
        <img src={ pokemon.image } alt=''/>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired
  })
}

export default Pokemon;

import React from 'react';

import data from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render () {
    return (
      data.map((info) => {
        return (<Pokemon pokemon={info} />)
      })
    )
  }
}

export default Pokedex

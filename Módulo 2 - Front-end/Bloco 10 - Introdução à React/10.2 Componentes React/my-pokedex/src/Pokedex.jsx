import React from 'react';

import data from './data';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
  constructor () {

    super();
    
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.pokeFilter = this.pokeFilter.bind(this);
    this.initials = this.initials.bind(this);

    this.state = {
      pokemons: [], 
      index: 0,
      types: [],
    }
  }

  componentDidMount() {
    const type1 = data
      .map((pokemon) => pokemon.type.split(' ')[0]);  
    const type2 = data
      .filter((pokemon) => pokemon.type.split(' ')[1])
      .map((pokemon) => pokemon.type.split(' ')[1]);

    const typeArray = [...type1, ...type2];
    const types = typeArray
      .sort()
      .filter((tipo, index, array) => array.indexOf(tipo) === index);

    this.setState({
      pokemons: data,
      types: [...types],
    });
  }

  next = () => {
    const { pokemons } = this.state;

    if (this.state.index === pokemons.length - 1) {
      this.setState({
        index: 0
      })
    } else {
      this.setState((previousSt, _props) => ({
        index: previousSt.index + 1
      }))
    }    
  }

  prev = () => {
    const { pokemons } = this.state;

    if (this.state.index === 0) {
      this.setState({
        index: pokemons.length - 1
      })
    } else {
      this.setState((previousSt, _props) => ({
        index: previousSt.index - 1
      }))
    }
  }

  pokeFilter({ target }) {
    this.setState(
      { pokemons: data },
      async () => {
        if (target.innerText !== 'All') {
          const { pokemons } = this.state;
          const newPokemons = pokemons
            .filter((pokemon) => (
              pokemon.type.split(' ')[0] === target.innerText
              || pokemon.type.split(' ')[1] === target.innerText
            ));
  
          this.setState({
            pokemons: [...newPokemons],
            index: 0,
          }
        );}
      }
    );
  }

  initials({ target }) {
    this.setState(
      { pokemons: data },
      () => {
        if (target.innerText !== 'All') {
          const { pokemons } = this.state;
          const newPokemons = pokemons
            .filter((pokemon) => pokemon.initial === true);
  
          this.setState({
            pokemons: [...newPokemons],
            index: 0,
          }
        );}
      }
    );
  }

  render () {  
    const { pokemons, types } = this.state;

    return (
      <div className="pokedex">
        
        <div className="filtros">
          <button onClick={ (e) => this.pokeFilter(e) }>All</button>
          { types.map((type, index) => 
            <Button
              key={ index }
              filter={ (e) => this.pokeFilter(e) }
              type={ type }
            />
          ) }
          <button onClick={ (e) => this.initials(e) }>Initials</button>
        </div>

        { pokemons.map((info) => {
          return (<Pokemon pokemon={info} />)
        })[this.state.index] }

        <div className="botoes">
          <button onClick={this.prev} disabled={ pokemons.length <= 1 }>Anterior</button>
          <button onClick={this.next} disabled={ pokemons.length <= 1 }>Próximo</button>
        </div>

      </div>
    )
  }
}

export default Pokedex;

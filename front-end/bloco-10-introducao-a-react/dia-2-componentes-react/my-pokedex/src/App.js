import './App.css';
import React from 'react';
import  './data';
import Pokemon from './components/Pokemon'
import pokemons from './data.js';




class App extends React.Component {
  render() {
    console.log(pokemons)
  return (
    <div className="App">
      <p className="title">Pokedéx</p>
      <header className="App-header">
           {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.name} name={pokemon.name} type={pokemon.type}  image={pokemon.image} />
        ))}
      </header>
    </div>
  )
  };
}

export default App;

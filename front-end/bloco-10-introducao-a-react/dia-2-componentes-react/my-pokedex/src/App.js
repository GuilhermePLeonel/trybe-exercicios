import './App.css';
import React from 'react';
import  './data';
import Pokemon from './components/Pokemon'
import pokemons from './data.js';




class App extends React.Component {

  constructor() {
    super()
    this.choser = this.choser.bind(this)
    this.filter = this.filter.bind(this)
    this.state = {
      numeroDeCliques: 0,
      tipoDoPokemon: []
    }
  }

  choser () {
    this.state.numeroDeCliques < 8 ? (
      this.setState((previousState, _props) =>({
      numeroDeCliques: previousState.numeroDeCliques + 1
    }))  
    ) : (
      this.setState({
      numeroDeCliques: 0
    }) 
    )
  }

  filter (event) {

    this.setState({
      numeroDeCliques: ''
    }) 

    if (event.target.value === 'Fire') {
      pokemons.filter((pokemon)=>pokemon.type === 'Fire')
    this.setState({
      tipoDoPokemon: pokemons.filter((pokemon)=>pokemon.type === 'Fire')
    }) 
    } else {
    pokemons.filter((pokemon)=>pokemon.type === 'Psychic')
    this.setState({
      tipoDoPokemon: pokemons.filter((pokemon)=>pokemon.type === 'Psychic')
    }) 
    }
  }

  render() {
    let selected = pokemons[this.state.numeroDeCliques]
  const { tipoDoPokemon } = this.state
  return (
    <div className="App">
      <p className="title">Pokedéx</p>
      <div><button onClick={this.choser}>next</button></div>
      <br/>
      <div>
        <button value='Fire' onClick={this.filter}>Fire</button>
        <button value='Psychic' onClick={this.filter}>Psychic</button>
      </div>

      <header className="App-header">
          { this.state.numeroDeCliques === '' ? (
            tipoDoPokemon.map((tipo)=> (
             <Pokemon key={tipo.name} name={tipo.name} type={tipo.type}  image={tipo.image} />
          ))
          ) : (
            <Pokemon key={selected.name} name={selected.name} type={selected.type}  image={selected.image} />
          )}
          
      </header>
    </div>
  )
  };
}

export default App;

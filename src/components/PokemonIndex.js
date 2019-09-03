import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const API = ('http://localhost:3000/pokemon')

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    toggleCard: false,
    searchTerm: ''
  }




  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value })
    
  }




  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(pokemonData => this.setState({ allPokemon: pokemonData }))
  }


  
  handleNewPokemonSumbit = (newPokemon) => {
    
    const pokemonFormatedData = {

      name: newPokemon.name,
      stats: [
        {
          value: newPokemon.hp,
          name: "hp"
        }
      ],
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      }
    }
    
    console.log(newPokemon)
    fetch(API, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(pokemonFormatedData)
    })
    .then(res => res.json())
    .then(ourNewPokemon => {
        this.setState({allPokemon: [...this.state.allPokemon, ourNewPokemon ] })
    })
  }


  render() {
    // console.log(this.state)
    
    const filteredPokemon = this.state.allPokemon.filter(pokemaan => pokemaan.name.includes(this.state.searchTerm) )
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        
        <input value={this.state.searchTerm} onChange={this.handleSearch} type="search" />
        <br />
        <br />
        <br />
        <PokemonCollection pokemons={filteredPokemon} />'

        <br />
        <PokemonForm onNewPokemonSubmit={this.handleNewPokemonSumbit} />
      </div>
    )
  }
}

export default PokemonPage

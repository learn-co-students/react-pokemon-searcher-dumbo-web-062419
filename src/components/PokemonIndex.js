import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchedPokemon: "",
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(pokemonData => this.setState({ pokemons: [...pokemonData] }))
  }

  searchPokemon = (event) => {
    if (event.target.value == "") {
      this.setState({ searchedPokemon: "" })
    } else {
      this.setState({ searchedPokemon: event.target.value })
    }
  }

  addPokemonCard = (newPokemon) => {
    // console.log("added pokemon", newPokemon)
    this.setState({ pokemons: [...this.state.pokemons, newPokemon] })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <PokemonForm addPokemonCard={this.addPokemonCard} />
        <br />
        <Search onSearchChange={this.searchPokemon} showNoResults={false} />
        <br />
        <PokemonCollection allPokemons={this.state.pokemons} searchedPokemon={this.state.searchedPokemon} />
        <br />
      </div>
    )
  }
}

export default PokemonPage

import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    query: ''
  }

  componentDidMount(){
    return fetch(`http://localhost:3000/pokemon`)
    .then(res => res.json())
    .then(pokemonData =>{
      this.setState({
        pokemon: pokemonData
      })
    })
  }

  handleQuery = (e, { value }) => {
    this.setState({
      query: value
    })
  }

  postPokemon = (poke) => {
    this.setState({ pokemon: [...this.state.pokemon, poke] })
  }

  render() {
    const queriedPokemon = this.state.pokemon.filter(poke =>
      poke.name.includes(this.state.query)
    )
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleQuery, 500)} showNoResults={false} />
        <br />
        <PokemonForm postPokemon={this.postPokemon}/>
        <br />
        <PokemonCollection pokemon={queriedPokemon}/>
      </div>
    )
  }
}

export default PokemonPage

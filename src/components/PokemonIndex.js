import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    allPokemons: [ ],
    newAllPokemons: [ ],
    term: " "
  }
// ##########################################
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({ allPokemons: data, newAllPokemons: data}))
    // console.log(5)
  }
// #########################################
  handleSearch = (term) =>{
    let newPokemonArray = this.state.allPokemons.filter(pokemon => {
      return pokemon.name.includes(term)

    })
    this.setState({
      term: term,
      newAllPokemons: newPokemonArray
    })
  // console.log(newPokemonArray)
  }

  addPokemon = (newPokemon) => {
   console.log(newPokemon)
   this.setState({
     allPokemons: [...this.state.allPokemons, newPokemon],
     newAllPokemons: [...this.state.newAllPokemons, newPokemon]
   })
 }

  render() {
    // console.log(this.state.allPokemons)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(event) => this.handleSearch(event.target.value)} value={this.state.term} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.newAllPokemons}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage

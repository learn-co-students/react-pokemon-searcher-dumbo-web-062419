import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    filteredPokes: []
  }

  handleNewPokemon = (newPoke) => {
    // console.log(newPoke)
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json' 
      },
      body: JSON.stringify(newPoke)
    }).then(res => res.json())
    .then(this.setState({
      filteredPokes: [...this.state.filteredPokes, newPoke]
    }))
  }

  filterPokes = (filteredPokemon) => {
    
    this.setState({
      filteredPokes: filteredPokemon
    })
  }

  handleSearch = (e) => {
    const filteredPokemon = this.state.allPokemon.filter(pokemon => {
      return pokemon.name.includes(e.target.value)
    })
    this.filterPokes(filteredPokemon)
  }

  handleTypeSearch = (e) => {
    const filteredPokemon = this.state.allPokemon.filter(pokemon => {
      return pokemon.types.includes(e.target.value)
    })
    this.filterPokes(filteredPokemon)
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => this.setState({
      allPokemon: pokemon,
      filteredPokes: pokemon
    }))
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <input type="text" value={this.state.search} placeholder="search" onChange={this.handleSearch}/><br></br>
        <label>filter by type</label>
        <select onChange={this.handleTypeSearch}>
          <option value="fire">fire</option>
          <option value="grass">grass</option>
          <option value="water">water</option>
          <option value="ghost">ghost</option>
          <option value="electric">electric</option>
          <option value="rock">rock</option>
          <option value="ground">ground</option>
          <option value="dragon">dragon</option>
          <option value="psychic">psychic</option>
          <option value="fighting">fighting</option>
          <option value="normal">normal</option>
        </select>
        {/* <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} /> */}
        <br />
        <PokemonCollection allPokemon={this.state.filteredPokes}/>
        <br />
        <PokemonForm handleNewPokemon={this.handleNewPokemon}/>
      </div>
    )
  }
}

export default PokemonPage

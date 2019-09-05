import React from 'react'
import PokemonCollection from './PokemonCollection'
import MyTeamCollection from './MyTeamCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    allPokemon: [],
    searchTerm: '',
    myTeam: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => this.setState({allPokemon: pokemons}))
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleAddFavPokemon = (pokemon) => {
    this.setState({
      myTeam: [...this.state.myTeam, pokemon]
    })

  }

  handleNewPokemon = (newPokemon) => {

    const pokemon = {
       name: newPokemon.name,
      stats: [
        {
          value:newPokemon.hp,
          name: "hp"}
      ],
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      }
    }


    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(pokemon)
    }).then(res => res.json())
    .then(myNewPokemon => {
      this.setState({
        allPokemon: [...this.state.allPokemon, myNewPokemon]
      })
    })

  }

  render() {
    const filteredPokemon = this.state.allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <input value ={this.state.searchTerm} onChange ={this.handleChange} type='search' />
        <br />
        <br />
        <br />
        <MyTeamCollection pokemons = {this.state.myTeam}/>
        <br />
        <hr />
        <br />
        <br />
        <PokemonForm newPokemonSubmit ={this.handleNewPokemon}/>
        <PokemonCollection pokemons = {filteredPokemon}
          handleAddFavPokemon = {this.handleAddFavPokemon}
        />
        <br />

      </div>
    )
  }
}

export default PokemonPage

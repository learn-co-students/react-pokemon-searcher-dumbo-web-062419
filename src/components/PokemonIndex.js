import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

const API = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    allPokemon: [],
    searchValue: ""
  }

  componentDidMount(){
    fetch(API)
      // .then(res => console.log(res))
      .then(res => res.json())
      // .then(allPokemon => console.log(allPokemon))
      .then(allPokemon => this.populateAllPokemonArray(allPokemon))
  }

  populateAllPokemonArray = (allPokemonParam) => {
    this.setState({ allPokemon: allPokemonParam })
  }

  addNewPokemonToPokemonIndex = (newPokemon) => {
    // console.log("addNewPokemonToPokemonIndex invoked");
    console.log("New pokemon to be added: ", newPokemon);

    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        // height: null,
        // weight: null,
        name: newPokemon.name,
        // abilities: [],
        // moves: [],
        stats: [{
            // value: null,
            // name: null
          },
          {
            // value: null,
            // name: null
          },
          {
            // value: null,
            // name: null
          },
          {
            // value: null,
            // name: null
          },
          {
            // value: null,
            // name: null
          },
          {
            value: newPokemon.hp,
            // name: "hp"
          }
        ],
        // types: [],
        sprites: {
          front: newPokemon.frontUrl,
          back: newPokemon.backUrl
        }
      })
    })
      .then(res => res.json())
      // .then(data => console.log("What is data?", data))
      // data is newPokemon
      .then(newPokemon => {
        this.setState({ allPokemon: [...this.state.allPokemon, newPokemon] })
      })
  }

  searchForPokemon = (e, { value }) => {
    console.log('🤔')
    // console.log("What is event?", e);
    // console.log("What is user input?", searchData.value);
    // console.log("What is user input?", value);
    this.setState({ searchValue: value })
  }

  render() {

    const filteredPokemon = this.state.allPokemon.filter(pokemon =>
      pokemon.name.includes(this.state.searchValue)
    )

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={
          _.debounce(this.searchForPokemon, 500)}
          showNoResults={false}
        />
        <br />
        <PokemonForm addPokemonForPokemonForm={this.addNewPokemonToPokemonIndex} />
        <br />
        <PokemonCollection
          getAllPokemonForPokemonCollection={filteredPokemon}
        />
      </div>
    )
  }
}

export default PokemonPage

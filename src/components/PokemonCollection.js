import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    let pokemons = this.props.allPokemons.filter(pokemon => {
      return pokemon.name.includes(this.props.searchedPokemon)
    })
    const filteredPokemons = pokemons.map(pokemon => <PokemonCard key={pokemon.name} pokemon={ pokemon }/>)

    return (
      <Card.Group itemsPerRow={6}>
        { filteredPokemons }
      </Card.Group>
    )
  }
}

export default PokemonCollection

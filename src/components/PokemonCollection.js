import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const numberedPokes = this.props.allPokemon.sort((a, b) => a.id > b.id ? 1 : -1 )
    const pokemonComps = numberedPokes.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)
    return (
      <Card.Group itemsPerRow={6}>
        {pokemonComps}
      </Card.Group>
    )
  }
}

export default PokemonCollection

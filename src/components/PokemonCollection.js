import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {

    // console.log("What is this?", this);
    // console.log("Get all pokemon for PokemonCollection: ", this.props.getAllPokemonForPokemonCollection);

    const allPokemon = this.props.getAllPokemonForPokemonCollection.map( pokemon => {
      return <PokemonCard key={pokemon.id} pokemonForPokemonCard={pokemon} />
    })

    return (
      <div>
      <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6} >
          {allPokemon}
        </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection

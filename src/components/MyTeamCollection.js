import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class MyTeamCollection extends React.Component {

  // pokemons = () => {
  //   const pokemons = this.props.pokemons.map(pokemon => {
  //   return  <PokemonCard pokemon ={pokemon} />
  //   })
  //   return pokemons;
  // }

  render() {
  // console.log(this.props);
  // console.log(this.props.handleClick)
  const pokemon = this.props.pokemons.map(pokemon => {
    return <PokemonCard pokemon = {pokemon}
       key = {pokemon.id}  />
  })
    return (
      <Card.Group itemsPerRow={6}>
        <h1>💪🏾 This is my team 💪🏾</h1>
        {pokemon}
      </Card.Group>
    )
  }
}

export default MyTeamCollection

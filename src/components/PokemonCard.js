import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    cardFront: true
  }

  handleCardClick = () => {
    // console.log("handleCardClick invoked");
    this.setState({ cardFront: !this.state.cardFront })
  }

  render() {

    // console.log("What is this?", this);
    // console.log("pokemonCard: ", this.props.pokemonForPokemonCard);

    const pokemonCard = this.props.pokemonForPokemonCard
    let pokemonImg = null

    if(this.state.cardFront){
      pokemonImg = pokemonCard.sprites.front
    } else {
      pokemonImg = pokemonCard.sprites.back
    }

    // console.log("pokemonCard.stats: ", pokemonCard.stats);
    // console.log("pokemonCard hp: ", pokemonCard.stats[5]);

    return (
      <Card>
        <div>
          <div className="image" onClick={this.handleCardClick} >
            <img src={pokemonImg} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemonCard.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemonCard.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

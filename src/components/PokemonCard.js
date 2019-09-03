import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false,
  }

  flipCard = () => {
    this.state.flipped ? this.setState({ flipped: false }) : this.setState({ flipped: true })
  }

  render() {
    // console.log(this.props.pokemon)
    return (
      <Card onClick={ this.flipCard }>
        <div>
          <div className="image">
            <img src={ this.state.flipped? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} alt={this.props.pokemon.name} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[0].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

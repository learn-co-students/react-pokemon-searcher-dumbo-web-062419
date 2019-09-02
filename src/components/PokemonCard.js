import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

state = {
cardClicked: false
}

toggleImg = () => {
  this.setState(initialState => ({cardClicked: !this.state.cardClicked})
 )
}

  render() {
    return (
      <Card>
        <div>
          <div onClick={this.toggleImg} className="image">
            <img src={this.state.cardClicked ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
               {this.props.pokemon.weight}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

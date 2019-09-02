import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    toggle: false
  }

  handleToggleClick = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {

    return (
      <Card onClick={this.handleToggleClick}>
        <div>
          <div className="image">
            {this.state.toggle ?
            <img src={this.props.poke.sprites.back} alt="oh yeah!" /> :
            <img src={this.props.poke.sprites.front} alt="oh no!" />}
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.poke.stats[4].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

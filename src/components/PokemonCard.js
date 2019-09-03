import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    showPic: false

  }


  findHp = () => {
    return this.props.pokemon['stats'].find(hp => hp.name === "hp").value
  }

  showBackPic = () => {
    this.setState({ showPic: !this.state.showPic });
  };



  render() {
    // console.log(this.props.pokemon);
    // console.log(this.props.pokemon['stats']);
    return (
      <Card>
        <div onClick={this.showBackPic}>

          {this.state.showPic ?
            <img src={this.props.pokemon.sprites.back} alt="oh no!" />
            :
            <div className="image">
              <img src={this.props.pokemon.sprites.front} alt="oh no!" />
            </div>
          }

          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.findHp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}



export default PokemonCard

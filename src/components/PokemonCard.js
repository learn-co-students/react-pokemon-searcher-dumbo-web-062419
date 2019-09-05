import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggleCard: false
  }
  findHp = () => {
    const hp = this.props.pokemon.stats.find(stat => stat.name === "hp").value
    return hp;
  }

  handleClick = () => {
    this.setState({
      toggleCard: !this.state.toggleCard
    })
  }

  handleFavClick = () => {
    this.props.handleAddFavPokemon(this.props.pokemon)
  }

  render() {
    // console.log(this.props);

    return (
      <Card>
        {
          this.props.handleAddFavPokemon ?
          <div onClick = {this.handleFavClick}>➕</div>
          :
          null
        }
        <div onClick =  {this.handleClick}>
          {this.state.toggleCard ?
            <div className="image">
              <img src = {this.props.pokemon.sprites.back} alt="oh no!"/>
              </div>
            :
            <div className="image">
              <img src = {this.props.pokemon.sprites.front} alt="oh no!"/>
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

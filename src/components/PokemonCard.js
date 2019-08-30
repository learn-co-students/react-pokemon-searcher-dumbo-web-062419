import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false,
    shiny: false
  }

  handleClick = () => {
    this.setState({
      flipped: !this.state.flipped,
      shiny: false
    })
  }

  shinyClick = () => {
    this.setState({
      shiny: !this.state.shiny,
      flipped: false
    })
  }


  render() {
    // console.log(this.props)
    const shinyPokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.props.pokemon.id}.png`
    const frontPokeImg = this.props.pokemon.sprites.front
    const backPokeImg = this.props.pokemon.sprites.back
    const pokestats = this.props.pokemon.stats.map(stat => <li>{stat.name} : {stat.value}</li>)
    // console.log(pokestats)
    
    // console.log(pokeImg)
    return (
      <Card>
        <div>
          {this.state.flipped ? 
          <div className="image">
          <img onClick={this.handleClick} alt="oh no!" src={backPokeImg}/>
        </div>  
        :
        <div className="image">
            <img onClick={this.handleClick} alt="oh no!" src={frontPokeImg}/>
          </div>
        }
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <ul>
                {pokestats}
              </ul>
              <i className="icon heartbeat red" />
              <button onClick={this.shinyClick}>show shiny</button>
              {this.state.shiny ? 
              <div>
                <img alt="" src={shinyPokeImg}></img>
              </div>  : null }
            
               {/* {pokeHp} hp */}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

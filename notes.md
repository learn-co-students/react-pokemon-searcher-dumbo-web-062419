- ✅ create an index displaying pokemon 'cards'
  - ✅ render each pokemon name, picture, and hp in a card
  - ✅when clicked, the card should toggle between displaying the front and back pictures
- allow users to search in order to narrow down the cards shown on the page
- wire up the form to add a missing pokemon (bulbasaur is missing, and you can probably intuit the image links to use based on the data you have). Since there aren't any validations, you may have to manually remove additions from the db.json file if you make a mistake on a post request, etc. When a new pokemon is added, it should show on the page without having to refresh.
- BONUS: implement some way to sort or filter pokemon in addition to the name search

















import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    showPic: false

  }


  findHp = () => {
    return this.props.pokemon['stats'].find(hp => hp.name === "hp").value
  }

  showPic = () => {
    this.setState({ showPic: !this.state.showPic });
  };



  render() {
    // console.log(this.props.pokemon);
    // console.log(this.props.pokemon['stats']);
    return (
      <Card  >

        <div onClick={this.props.handleClick} >


          <div className="image">
            <img src={this.props.pokemon.sprites.front} alt="oh no!" />

          </div>



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

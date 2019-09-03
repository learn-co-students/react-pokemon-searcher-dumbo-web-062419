import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleHpChange = (event) => {
    this.setState({
      hp: event.target.value
    })
  }

  handleFrontUrlChange = (event) => {
    this.setState({
      frontUrl: event.target.value
    })
  }

  handleBackUrlChange = (event) => {
    this.setState({
      backUrl: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [{name: "hp", value: this.state.hp}],
        sprites: {front: this.state.frontUrl, back: this.state.backUrl}
      })
    })
    .then(res => res.json())
    .then(newPokemon => this.props.addPokemonCard(newPokemon))
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal" onChange={this.handleChange}>
            <Form.Input fluid onChange={this.handleNameChange} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid onChange={this.handleHpChange} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid onChange={this.handleFrontUrlChange} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid onChange={this.handleBackUrlChange} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

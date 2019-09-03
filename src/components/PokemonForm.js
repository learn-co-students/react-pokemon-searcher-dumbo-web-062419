import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      // name: 'currentName',
      // hp: 9001,
      // frontUrl: 'currentFrontUrl',
      // backUrl: 'currentBackUrl'
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (e) => {
    // console.log("handleSubmit invoked, adding new pokemon");
    // console.log("What event was triggered?", e.target);
    // console.log("What is e.target.name.value?", e.target.name.value);
    // console.log("What is the new frontUrl?", this.state.frontUrl);

    this.setState({
      name: e.target.name.value,
      hp: e.target.hp.value,
      frontUrl: e.target.frontUrl.value,
      backUrl: e.target.backUrl.value
    }, () => {
      // console.log("What is the new name?", this.state.name);
      // console.log("What is the new hp?", this.state.hp);
      // console.log("What is the new frontUrl?", this.state.frontUrl);
      // console.log("What is the new backUrl?", this.state.backUrl);

      const newPokemon = {
        name: this.state.name,
        hp: this.state.hp,
        frontUrl: this.state.frontUrl,
        backUrl: this.state.backUrl
      }

      this.props.addPokemonForPokemonForm(newPokemon)

    })

    e.target.reset()
  }

  render() {

    // console.log("What is the current name?", this.state.name);
    // console.log("What is the current hp?", this.state.hp);
    // console.log("What is the current frontUrl?", this.state.frontUrl);
    // console.log("What is this.props for PokemonForm?", this.props);

    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

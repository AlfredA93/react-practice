import React, { Component } from 'react'
import importedNames from '../names'
import names from '../names'

export class SearchBar extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      names: importedNames
    }
  }

  handleChange = (event) => {
    const inputText = event.target.value.toLowerCase();
    const filteredNames = importedNames.filter(name => {
      return name.toLowerCase().includes(inputText)
    });
    this.setState({
      names: filteredNames
    })

  }

  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>Names Found: {this.state.names.length}</p>
        <form>
          <input 
            placeholder="Search names..."
            type="text"
            onChange={(event) => this.handleChange(event)}
          />
        </form>
        <div style={{margin: 'auto'}}>
          {this.state.names.map(
            (name) => {
              return <p key={name}>{name}</p>
            }
          )}
          <p></p>
        </div>
      </div>
    )
  }
}

export default SearchBar
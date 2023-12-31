import React, { Component } from 'react'

export class ControlledForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      name: '',
      category: 'website',
      comments: '',
    }
  }

// The functions below are for the seperate handling of each form field

  // handleNameChange = (event) => {
  //   this.setState({
  //     name: event.target.value
  //     })
  // }

  // handleCategoryChange = (event) => {
  //   this.setState({
  //     category: event.target.value
  //   })
  // }

  // handleCommentsChange = (event) => {
  //   this.setState({
  //     comments: event.target.value
  //   })
  // }


  handleChange = (event) => {  // This handles all form fields within one function, utilising [name]
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label htmlFor="id-name">Your Name:</label>
          <input 
            value={this.state.name} 
            onChange={this.handleChange}
            id="id-name"
            name="name" 
            type="text" 
          />
          </div>
          <div>
          <label htmlFor="id-category">Query Category:</label>
          <select 
            id="id-category" 
            name="category"
            onChange={this.handleChange}
            value={this.state.category}
          >
            <option value="website">Website Issue</option>
            <option value="order">Order Issue</option>
            <option value="general">General Inquiry</option>
          </select>
          </div>
          <div>
            <label htmlFor="id-comments">Comments:</label>
            <textarea 
              id="id-comments" 
              name="comments" 
              onChange={this.handleChange}
              value={this.state.comments}
            />
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default ControlledForm
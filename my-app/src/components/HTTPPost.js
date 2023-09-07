import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      apiResponse: null
    }
  }

  postToApi = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Hello World!',
      body: 'It works!',
      userId: 123,
    }
    ).then(response => {
      this.setState({
        apiResponse: response.data
      })
    })}

  render() {
    const {apiResponse} = this.state;
    return (
      <div>
        <button onClick={this.postToApi}>
          Create Post
        </button>
        {
          apiResponse ?
          (
          <div>
            <h2>{apiResponse.id}. {apiResponse.title}</h2>
            <h4>By User ID {apiResponse.userId}</h4>
            <p>{apiResponse.body}</p>
            <hr/>
          </div>
          ):(<p>Please click the button above</p>)
        }
        
      </div>
    )
  }
}

export default HTTPPost
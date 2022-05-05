import React, { Component } from 'react'
import Navbar from '../Navbar/index'

export class PostLogin extends Component {
  render() {
    return (
        <>
      <Navbar loggedin={this.props.loggedin} name={this.props.username} />
      <h1>Please use this ID as your password for login</h1>
      <h2>{this.props.id}</h2>
    
    </>)
  }
}

export default PostLogin
import React, { Component } from 'react';

import Navbar from './components/Navbar/index';
import Posting from './components/Posting/index';



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  render() {
    let postingList = new Array();
    console.log(this.state.apiResponse);
    for (var i = 0; i < this.state.apiResponse.length; i++) {
      var obj = this.state.apiResponse[i];
      postingList.push(obj);
      console.log("asdff");
    }
    const listed = postingList.map(posting => (
      <Posting title={posting.title} body={posting.body} />
    
    ));
    return (
      <>
        <Navbar />
        <div>
          <h1>Posts From the express server</h1>
          
            {listed}
          
        </div>
      </>
    )
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch(process.env.REACT_APP_API_URL_POSTS, {
      method: 'GET',
    })
      .then(res=> res.json())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }
}

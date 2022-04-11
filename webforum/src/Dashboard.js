import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import Posting from './components/Posting/index';
import Comment from './components/Comment/index';



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  
  render() {
    let postingList = new Array();
    for (var i = 0; i < this.state.apiResponse.length; i++) {
      var obj = this.state.apiResponse[i];
      postingList.push(obj);
    }
  
    const listed = postingList.map(posting => (
      <Posting comments={posting.comments} title={posting.title} body={posting.body} id={posting.id} />
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
    console.log("CAll api function");
    fetch(process.env.REACT_APP_API_URL_POSTS, {
      method: 'GET',
    })
      .then(res=> res.json())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }
}

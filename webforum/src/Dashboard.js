import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import Posting from './components/Posting/index';
import Comment from './components/Comment/index';
import { Dropdown as Dropdown } from './components/CreatePost/CreatePostElements';



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      category: "Homework",
    };
    this.handleChange = this.handleChange.bind(this);

  }

  render() {
    let postingList = new Array();
    for (var i = 0; i < this.state.apiResponse.length; i++) {
      var obj = this.state.apiResponse[i];
      if (obj.category == this.state.category) {
        postingList.push(obj);
      }
    }


    const listed = postingList.map(posting => (

      <Posting comments={posting.comments} title={posting.title} body={posting.body} id={posting.id} />
    ));

    return (
      <>
        <Navbar />
        <div>
          <label>Select Category </label>
          <Dropdown name="category" id="category" onChange={this.handleChange}>
            <option value="Homework">Homework</option>
            <option value="Dorms">Dorms</option>
            <option value="Campus Questions">Campus Questions</option>
            <option value="Other">Other</option>
          </Dropdown>
        </div>
        <div>
          <h1>{this.state.category} Questions</h1>

          {listed}

        </div>
      </>
    )
  }

  componentDidMount() {
    this.callAPI();
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });

  }

  callAPI() {
    console.log("CAll api function");
    fetch(process.env.REACT_APP_API_URL_POSTS, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }
}

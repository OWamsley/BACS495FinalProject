import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import Posting from './components/Posting/index';
import Comment from './components/Comment/index';
import { Dropdown as Dropdown } from './components/CreatePost/CreatePostElements';
import { Navigate } from 'react-router-dom';



export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      category: this.props.category,
      forceupdate: '',
      listing: '',
      switch: false,
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.updatePage = this.updatePage.bind(this);

  }

  updatePage(){
    this.callAPI();
    console.log("force update");
    
    this.setState({
      switch:true,
      category: "",
    });
    
  }

  render() {
    if(this.state.switch){
      this.setState({
        switch: false
      });
      if(this.state.category == "Campus Questions"){
        return (<Navigate to={("/Campus")}/>)
      }

      return( <Navigate to={("/" + this.state.category)} />)
  }

    let postingList = new Array();
    postingList = [];
    for (var i = 0; i < this.state.apiResponse.length; i++) {
      var obj = this.state.apiResponse[i];
      if (obj.category === this.state.category) {
        postingList.push(obj);
      }
    }

    listed = [];
    var listed = postingList.map(posting => (
      <Posting update={this.updatePage} comments={posting.comments} title={posting.title} body={posting.body} username={posting.username} id={posting.id} loggedin={this.props.loggedin} loggedinuser={this.props.username} />
    ));
    

    

    return (
      <>
        <Navbar loggedin={this.props.loggedin} name={this.props.username}/>
        <div>
          <label>Select Category</label>
          <Dropdown name="category" id="category" onChange={this.handleChange}>
            <option value="Category">Category</option>
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
    console.log(event.target.name)
    console.log(event.target.value)
    this.setState({
      switch: true,
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

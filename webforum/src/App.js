import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import CreatePost from './CreatePost';
import Posting from './components/Posting/index';
import PostLogin from './components/PostLogin/index';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      id: -1,
      loggedin: false
    };
    this.logInUser = this.logInUser.bind(this);
    this.setId = this.setId.bind(this);
  }

  setId(id){
    this.setState({
      id: id
    });
  }

  logInUser(user){
    this.setState({
      username: user,
      loggedin: true
    });
    console.log("User set " + user);
  }

  render(){
  return (<>
    <Router>
      <Routes>
        
          <Route path="/Homework" element={<Dashboard category={"Homework"} username={this.state.username} loggedin={this.state.loggedin}/>} />
          <Route path="/Dorms" element={<Dashboard category={"Dorms"} username={this.state.username} loggedin={this.state.loggedin}/>} />
          <Route path="/Other" element={<Dashboard category={"Other"} username={this.state.username} loggedin={this.state.loggedin}/>} />
          <Route path="/Campus" element={<Dashboard category={"Campus Questions"} username={this.state.username} loggedin={this.state.loggedin}/>} />
          <Route path="/" element={<Dashboard category={"Homework"} username={this.state.username} loggedin={this.state.loggedin}/>} />
          <Route path="login" element={<Login username={this.state.username} loggedin={this.state.loggedin} logInUser={this.logInUser} />} />
          <Route path="signup" element={<Signup username={this.state.username} loggedin={this.state.loggedin} setId={this.setId} logInUser={this.logInUser}/>} />
          <Route path="createPost" element={<CreatePost username={this.state.username} loggedin={this.state.loggedin}/>} />
          <Route path="login/info" element={<PostLogin id={this.state.id} username={this.state.username} loggedin={this.state.loggedin}   /> } />
        
      </Routes>
    </Router>
    </>
  );
}
}








export default App;

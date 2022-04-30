import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';
import CreatePost from './CreatePost';
import Posting from './components/Posting/index';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      loggedin: false
    };
    this.logInUser = this.logInUser.bind(this);
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
        
          <Route path="/" element={<Dashboard username={this.state.username} loggedin={this.state.loggedin}/>} />
          <Route path="login" element={<Login username={this.state.username} loggedin={this.state.loggedin} logInUser={this.logInUser} />} />
          <Route path="signup" element={<Signup username={this.state.username} loggedin={this.state.loggedin}  logInUser={this.logInUser}/>} />
          <Route path="createPost" element={<CreatePost username={this.state.username} loggedin={this.state.loggedin}/>} />
        
      </Routes>
    </Router>
    </>
  );
}
}








export default App;

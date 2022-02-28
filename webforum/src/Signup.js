import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import { Navigate } from 'react-router-dom';



export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:'',
            loggedOn:false,
        };
    }

    handleChange = (event)=>{
        this.setState({
            [event.target.name]: event.target.value,
        })
        
    }

    handleSubmit = (event)=>{
       this.setState({loggedOn:true})
    }

    render() {
        if(this.state.loggedOn){
            return <Navigate to="/"/>
        }
        return (<>
            <Navbar/>
        <div>
            <h2>Signup</h2>
            <form onSubmit={this.handleSubmit}>
                    <div><label >Username: </label>
                    <input id="username" type="text" name="username" onChange={this.handleChange} />
                    {this.state.errorMessage && <span className="error">Username is required</span>}
                    </div>
                    <div>
                    <label >Password: </label>
                    <input id="password" type="password" name="password" onChange={this.handleChange} />
                    {this.state.errorMessage && <span className="error">Password is required</span>}
                    <input type="submit" value="Submit" />
                    </div>
            </form>

        </div>
        </>
    )
  }
}

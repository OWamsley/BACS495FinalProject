import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: -1,
            loggedOn: false,
            apiResponse: '',
            errorMessage: '',
            switch: false
        };
        this.processResult = this.processResult.bind(this);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });

    }

    logInUser = (name) => {
        this.props.logInUser(name)
    }

    switch = (event) => {
        event.preventDefault();
        this.setState({
            switch: true
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const numID = parseInt(this.state.password);
        fetch(process.env.REACT_APP_API_URL_USERS + '/' + this.state.password, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.username,
                id: numID
            })
        })
            .then(res => res.json())
            .then(res => this.processResult(res))
            .then(res => console.log("res" + res))
            .then(res => this.setState({
                apiResponse: res
            }))
            .then(res => console.log("state " + this.setState.apiResponse))
            
        
            
    }

    processResult(res){
        if (res == null) {
            this.setState({
                errorMessage: "Incorrect Username or ID"
            })
        }
        else {
            this.logInUser(res.name);
        }
    }

    render() {
        if (this.props.loggedin) {
            return <Navigate to="/" />
        }
        if(this.state.switch){
            return <Navigate to="/signup" />
        }
        return (<>
            <Navbar username={this.state.username} loggedin={this.state.loggedin}/>
            <Container>
                <BoxOne><h2>Log in</h2></BoxOne>
                <BoxTwo>{this.state.errorMessage}</BoxTwo>

                <Form onSubmit={this.handleSubmit}>
                    <BoxTwo>
                        <Label >Username: </Label>
                        <Input id="username" type="text" name="username" onChange={this.handleChange} />
                        {this.state.errorMessage && <span className="error">Username is required</span>}
                    </BoxTwo>
                    <BoxTwo>
                        <Label >ID: </Label>
                        <Input id="password" type="number" name="password" onChange={this.handleChange} />
                        {this.state.errorMessage && <span className="error">Password is required</span>}

                    </BoxTwo>
                    <BoxOne>
                        <input type="submit" value="Submit" />
                    </BoxOne>
                </Form>
                <Form onSubmit={this.switch}>
                    <BoxOne>
                        <input type="submit" value="Sign up Instead" />
                    </BoxOne>
                </Form>

            </Container>

        </>
        )
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height:300px;
    align-items: center;
    
    
`

const BoxOne = styled.div`
    display: flex;
    padding: 5px;
    flex-direction: column;

    margin: auto;
    
`
const Form = styled.form`
    flex-direction: column;
    display:flex;
    justify-content: center;
    alight-items: stretch;
`

const BoxTwo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`
const Label = styled.label`
    display: flex;
    flex-grow: 1;
    padding: 5px;
    flex-basis: 3%;
`

const Input = styled.input`
    display:flex;
    flex-grow: 2;
`


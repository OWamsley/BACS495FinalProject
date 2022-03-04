import React, { Component } from 'react';
import Navbar from './components/Navbar/index';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedOn: false,
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })

    }

    handleSubmit = (event) => {
        //needs to actually do more later on 
        this.setState({ loggedOn: true })
    }

    render() {
        if (this.state.loggedOn) {
            return <Navigate to="/" />
        }
        return (<>
            <Navbar />
            <Container>
                <BoxOne><h2>Log in</h2></BoxOne>
                
                <Form onSubmit={this.handleSubmit}>
                    <BoxTwo>
                        <Label >Username: </Label>
                        <Input id="username" type="text" name="username" onChange={this.handleChange} />
                        {this.state.errorMessage && <span className="error">Username is required</span>}
                    </BoxTwo>
                    <BoxTwo>
                        <Label >Password: </Label>
                        <Input id="password" type="password" name="password" onChange={this.handleChange} />
                        {this.state.errorMessage && <span className="error">Password is required</span>}
                        
                    </BoxTwo>
                    <BoxOne>
                        <input type="submit" value="Submit" />
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

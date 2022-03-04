import React, { Component } from 'react';
import { Container, Title, Body, User } from './PostingElements';

export default class Posting extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            body: props.body,
        };
    }



    render() {
        return (
            <Container>
                <User><b>Username</b></User>
                <Title>
                    <h3>{this.state.title}</h3>
                </Title>
                <Body>
                    {this.state.body}
                </Body>
            </Container>
        )
    }
}

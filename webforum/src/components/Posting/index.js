import React, { Component } from 'react';
import { Container, Title, Body, User, CommentBody, Form, Input, Submit } from './PostingElements';

export default class Posting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            body: props.body,
            id: props.id,
            comment: '',
            comments: [],
            key: props.id,
        };
        
        this.handleChange=this.handleChange.bind(this);
        this.callAPI = this.callAPI.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        this.callAPI();
    }
    callAPI(){
        //add comment
    }

    componentDidMount() {
        this.getComments();
      }
    getComments(){
        console.log("Loading Comments...");
        fetch((process.env.REACT_APP_API_URL_POSTS + '/comments'), {
            method: 'GET',
            body: {"id": this.state.key},
          })
            .then(res=> res.json())
            .then(res => this.setState({ comments: res }))
            .catch(err => err);
        
    }

    render() {
        console.log("key : " + this.state.key);
        return (
            <Container>
                <User><b>Username</b></User>
                <Title>
                    <h3>{this.state.title}</h3>
                    
                </Title>
                <Body>
                    {this.state.body}
                    
                </Body>
                <CommentBody>
                    <Form onSubmit={this.handleSubmit}>
                        
                        <Input id="comment" type="text" name="comment" rows="8" onChange={this.handleChange} />
                        <div>
                            <Submit type='submit' value="Submit" />
                        </div>
                    </Form>
                </CommentBody>
            </Container>
        )
    }
}

import React, { Component } from 'react';
import Comment from '../Comment/index';
import { Container, Title, Body, User, CommentBody, Form, Input, Submit } from './PostingElements';

export default class Posting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            body: props.body,
            id: props.id,
            comment: '',
            comments: props.comments,
            key: props.id,
            username: props.username,
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
        fetch(process.env.REACT_APP_API_URL_POSTS, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify({
                id: this.state.key,
                commentBody: this.state.comment,
            })
        })
    }

    componentDidMount() {
        
      }

    render() {
        const listedComments = this.state.comments.map(comment => (
            <Comment body={comment.commentBody} likes={comment.likes} dislikes={comment.dislikes}/>
        ));
        
        return (
            <Container>
                <User><b>By: {this.state.username}</b></User>
                <Title>
                    <h3>{this.state.title}</h3>
                   
                    
                </Title>
                <Body>
                    {this.state.body}
                    
                </Body>
                <div>
                {listedComments}
                </div>
                <CommentBody>
                    <Form onSubmit={this.handleSubmit}>
                        <h4>Add a Comment</h4>
                        <Input id="comment" type="text" rows="6" name="comment" onChange={this.handleChange} />
                        <div>
                            <Submit type='submit' value="Submit" />
                        </div>
                    </Form>
                </CommentBody>
            </Container>
        )
    }
}

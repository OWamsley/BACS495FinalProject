import React, { Component } from 'react';
import Comment from '../Comment/index';
import { Navigate } from 'react-router-dom';
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
            switch: false,
            posted: false,
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
        event.preventDefault();
        if(this.props.loggedin == false){
            this.setState({
                switch: true
            });
            return;
        }

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
                username: this.props.loggedinuser,
            })
            
        })
        setTimeout(()=> {
            this.setState({comment: ''});
            this.updatePage();
            this.forceUpdate();
        }, 1000);
        
    }

    updatePage = () =>{
        this.props.update();
    }

    componentDidMount() {
        
      }

    render() {
        const listedComments = this.state.comments.map(comment => (
            <Comment body={comment.commentBody} postid={this.props.id} commentid={comment.id} voted={comment.voted} likes={comment.likes} username={comment.username} dislikes={comment.dislikes} loggedin={this.props.loggedin} loggedinuser={this.props.loggedinuser}/>
        ));
        if(this.state.switch){
            return <Navigate to="/login" />
        }
        
        
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

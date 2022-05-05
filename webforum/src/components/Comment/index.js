import React, { Component } from 'react';
import { Name, Container, ButtonBox, Like, Dislike, CommentBody, Karma } from './CommentElements';
import upStandard from './resources/upStandard.png';
import upSelected from './resources/upSelected.png';
import downStandard from './resources/downStandard.png';
import downSelected from './resources/downSelected.png';
import { Navigate } from 'react-router-dom';

export default class Comment extends Component {
    constructor(props){
        super(props);
        this.handleUp = this.handleUp.bind(this);
        this.handleDown = this.handleDown.bind(this);
        this.state = {
            body : props.body,
            likes : props.likes,
            dislikes : props.dislikes,
            upArrow : upStandard,
            downArrow: downStandard,
            up: false,
            down: false,
            switch: false, 
        }
        this.callAPI = this.callAPI.bind(this);
    }
    handleUp(){
        
        if(this.props.loggedin == false){
            this.setState({
                switch: true
            });
            return;
        }
        if(this.state.up){
            this.setState({ up: false, upArrow: upStandard});
            this.callAPI(-1);
            var up = this.state.likes;
            this.setState({
                likes: (up-1)
            })
        }
        else{
            this.setState({
                down: false,
                downArrow: downStandard,
                up: true,
                upArrow: upSelected,
            });
            this.callAPI(1);
            var up = this.state.likes;
            this.setState({
                likes: (up+1)
            })
            
        }
    }

    callAPI(increment){
        fetch(process.env.REACT_APP_API_URL_POSTS, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: this.props.postid,
                inc: increment,
                commentid: this.props.commentid,
            })
        })
    }

    handleDown(){
        console.log(this.props.loggedin);
        if(this.props.loggedin == false){
            this.setState({
                switch: true
            });
            return;
        }
        if(this.state.down){
            this.setState({ down: false, downArrow: downStandard})
            this.callAPI(1);
            var up = this.state.likes;
            this.setState({
                likes: (up+1)
            })
        }
        else{
            this.setState({
                up: false, 
                upArrow: upStandard,
                down: true,
                downArrow: downSelected,
            })
            this.callAPI(-1);
            var up = this.state.likes;
            this.setState({
                likes: (up-1)
            })
        }

    }
    render() {
        if(this.state.switch){
            return <Navigate to="/login" />
        }
        return (
            <Container>
                <ButtonBox>
                    <Like> <img src={this.state.upArrow}  alt="uparrow" onClick={this.handleUp} />  </Like>
                    <Karma>{this.state.likes - this.state.dislikes}</Karma>
                    <Dislike> <img src={this.state.downArrow} alt="uparrow" onClick={this.handleDown} /> </Dislike>
                </ButtonBox>
                <CommentBody>
                    <Name> <b>By {this.props.username} </b></Name>
                    <CommentBody>{this.state.body}</CommentBody>
                </CommentBody>
            </Container>
        )
    }
}


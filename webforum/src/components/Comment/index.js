import React, { Component } from 'react';
import { Container, ButtonBox, Like, Dislike, CommentBody, Karma } from './CommentElements';
import upStandard from './resources/upStandard.png';
import upSelected from './resources/upSelected.png';
import downStandard from './resources/downStandard.png';
import downSelected from './resources/downSelected.png';

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
        }
    }
    handleUp(){
        if(this.state.up){
            this.setState({ up: false, upArrow: upStandard})
        }
        else{
            this.setState({
                down: false,
                downArrow: downStandard,
                up: true,
                upArrow: upSelected,
            });
            
        }
    }

    handleDown(){
        if(this.state.down){
            this.setState({ down: false, downArrow: downStandard})
        }
        else{
            this.setState({
                up: false, 
                upArrow: upStandard,
                down: true,
                downArrow: downSelected,
            })
        }

    }
    render() {
        return (
            <Container>
                <ButtonBox>
                    <Like> <img src={this.state.upArrow}  alt="uparrow" onClick={this.handleUp} />  </Like>
                    <Karma>{this.state.likes - this.state.dislikes}</Karma>
                    <Dislike> <img src={this.state.downArrow} alt="uparrow" onClick={this.handleDown} /> </Dislike>
                </ButtonBox>
                <CommentBody>
                    <CommentBody>{this.state.body}</CommentBody>
                </CommentBody>
            </Container>
        )
    }
}


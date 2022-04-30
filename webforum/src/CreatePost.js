import React, { Component } from 'react';
import CreatePost from './components/CreatePost/index';
import Navbar from './components/Navbar/index';

export class CreatePostPage extends Component {
    render() {
        return (
            <>
                <Navbar username={this.props.username} loggedin={this.props.loggedin} />
                
                <CreatePost username={this.props.username} loggedin={this.props.loggedin}/>
            </>
        )
    }
}

export default CreatePostPage
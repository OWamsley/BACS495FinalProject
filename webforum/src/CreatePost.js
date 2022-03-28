import React, { Component } from 'react';
import CreatePost from './components/CreatePost/index';
import Navbar from './components/Navbar/index';

export class CreatePostPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <CreatePost />
            </>
        )
    }
}

export default CreatePostPage
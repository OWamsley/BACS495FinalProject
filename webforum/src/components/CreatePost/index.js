import React, { Component } from 'react';

import { Container, Input, Body, Form, Dropdown } from './CreatePostElements';


export default class CreatePostElements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'Homework',
            title: '',
            body: '',
        };
        this.handleChange=this.handleChange.bind(this);
        this.callAPI = this.callAPI.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    callAPI() {
        console.log("CAll api function");
        fetch(process.env.REACT_APP_API_URL_POSTS, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title: this.state.title, body: this.state.body, category: this.state.category}),
        })
          .then(function(res){console.log(res)})
          .catch(function(res){console.log(res)});
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


    render() {
        return (
            <Container>
                <h1>Create a Post</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <label>Post Category</label>
                        <Dropdown name="category" id="category" onChange={this.handleChange}>
                            <option value="Homework">Homework</option>
                            <option value="Dorms">Dorms</option>
                            <option value="Campus Questions">Campus Questions</option>
                            <option value="Other">Other</option>
                        </Dropdown>
                        <label>Title</label>
                        <Input id="title" type="text" name="title" onChange={this.handleChange} />
                        <Body id="body" type="text" name="body" rows="12" onChange={this.handleChange} />
                        <div>
                            <input type='submit' value="Submit" />
                        </div>
                    </Form>
                

            </Container>
        )
    }
}


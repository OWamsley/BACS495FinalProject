import React, { Component } from 'react'
import { Container, Input, Body, Form } from './CreatePostElements';


export default class CreatePostElements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            body: props.body,
        };
    }
 
    callAPI() {
        console.log("CAll api function");
        fetch(process.env.REACT_APP_API_URL_POSTS, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({title: this.props.title, body: this.props.body}),
        })
          .then(function(res){console.log(res)})
          .catch(function(res){console.log(res)});
      }

    handleChange = (event) => {
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


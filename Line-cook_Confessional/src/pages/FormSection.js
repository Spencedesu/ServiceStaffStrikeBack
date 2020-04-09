
import React, { useState, useEffect } from "react";
import {Container, Image} from "";
import { TextArea , Input, Form, Button} from "semantic-ui-react";
import API from "../utils/API";

// Look at this stuff particularly !! //
function FormSection(){
const [postedPost, setPostedPost] = useState([])
const [post, setPost] = useState({
  username:"",
  establishment:"",
  description: ""
});

useEffect(() => {
  loadPosts()
}, [])

function loadPosts() {
  API.getPosts()
  .then(res =>
   setPost(res.data)
    ).catch(err => console.log(err))
};

function handleInputChange(event) {
  const { name, value } = event.target;
  console.log(name); //Shows the field <---
  console.log(post[name]); //points to one of the variables for that field
  setPost({ ...post, [name]: value})
}
// Have Rani or someone take a look at this
// might have an syntax oopsie somewhere
function handleFormSubmit(event){
  event.preventDefault();
  if (post.username && post.description) {
  APi.savePost({
    username: post.username,
    description: post.description
  }).then(() => {
    setPost({
      username:"",
      description:""
    })
  }).then(() =>{loadPosts();})
}
}
  return (
    <div>
      <Form size="huge">
              <Form.Input
                onChange={handleInputChange}
                name="username" 
                placeholder="Your name please."/>
              <Form.Input
                onChange={handleInputChange}
                name="establishment" 
                placeholder="establishment"/>
              <Form.TextArea
                onChange={handleInputChange}
                name="review"
                placeholder="Write a review."
                />
                <Button
                onClick={handleFormSubmit}
                fluid size="large"
                > 
                  Submit your Story</Button>
              </Form>
        
    </div>
  )
}

export default FormSection;


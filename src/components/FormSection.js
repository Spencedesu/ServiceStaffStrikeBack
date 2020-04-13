
import React, { useState, useEffect } from "react";
import { TextArea , Input, Form, Button, List, ListItem} from "semantic-ui-react";
import API from "../utils/API";

// Look at this stuff particularly !! //
function FormSection(){
const [postedPost, setPostedPost] = useState([])
const [postObject, setPostObject] = useState({
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
   setPostObject(res.data)
    ).catch(err => console.log(err))
};

function handleInputChange(event) {
  const { name, value } = event.target;
  console.log(name); //Shows the field <---
  console.log(postObject[name]); //points to one of the variables for that field
  setPostObject({ ...postObject, [name]: value})
}
// Havesomeone take a look at this
// might have an syntax oopsie somewhere
function handleFormSubmit(event){
  event.preventDefault();
  if (postObject.username && postObject.description) {
  API.savePost({
    username: postObject.username,
    establishment:postObject.establishment,
    description: postObject.description
  }).then(() => {
    setPostObject({
      username:"",
      description:""
    })
  }).then(() =>{loadPosts();})
}
}
  return (
    <div id="form-section">
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
        {/* Not sure whats going on below this.. */}
        {postedPost.length ? (
          <List>
            {postedPost.map(post => {
              return (
            <ListItem key={post._id}>
              <a href = {"/posts/" + post._id}>
                <h1>{post.username} commented about {post.establishment}
                </h1>
              </a>
            </ListItem>  
            );
              
            })}
          </List>
        ): (
          <h3>No Result to Display</h3>
        )}
        
    </div>
  )
}

export default FormSection;


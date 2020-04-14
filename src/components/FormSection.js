
import React, { useState, useEffect } from "react";
import { Form, Button, List, ListItem} from "semantic-ui-react";
import API from "../utils/API";

// Look at this stuff particularly !! //
function FormSection(){
const [postedPost, setPostedPost] = useState([])
const [postObject, setPostObject] = useState({
  name:"",
  establishment:"",
  review: "",
  date: ""
});

useEffect(() => {
  loadPosts()
}, [])

function loadPosts() {
  API.getPosts()
  .then(res =>{
    console.log(res);
   setPostObject(res.data)
  }
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
          placeholder="establishment (optional)"/>
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
        {postObject.length ? (
          <List>
            {postObject.map(post => {
              return (
            <ListItem key={post._id}>
              <a href = {"/posts/" + post._id}>
                <h2></h2>
                <h1>{post.name} commented about {post.establishment}
                </h1>
                <h2>{post.review}</h2>
                <hr></hr>
              </a>
            </ListItem>  
            );
              
            })}
          </List>
        ): (
          <h3>Change on screen</h3>
        )}
        
    </div>
  )
}

export default FormSection;


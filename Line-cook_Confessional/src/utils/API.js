import axios from "axios";

export default {
  //retrieves posts... For display on the screen
  getPost: function() {
    return axios.get("api.posts")
  },
  // Saves a post
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  }
};

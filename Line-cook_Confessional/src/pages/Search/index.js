import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

function Search() {

// //class Search extends Component {
//   state = {
//     search: "Wikipedia",
//     title: "",
//     description: "",
//     url: "",
//     error: ""
//   };
  const [search, setSearch] = useState("Wikipedia");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [error , setError] = useState("");
  // When the component mounts, update the title to be Wikipedia Searcher
  // So, like instead of "compo npm starnentDid mount", you do somehting like "useEffect(); "
  //and that can represent the new function.

  useEffect(()=> {
    document.title = "Wikipedia Searcher";

    API.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setTitle(res.data[1][0]);
        setUrl(res.data[3][0]);
        // this.setState({
        //   title: res.data[1],
        //   url: res.data[3][0],
        //   error: ""
        // });
      })
      .catch(err => this.setState({ error: err.message }));
  }, [search]);

  const handleInputChange = event => {
    this.setState({ search: event.target.value });
  };
  

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.search) {
      return;
    }
    API.searchTerms(this.state.search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({
          title: res.data[1],
          description: res.data[2][0],
          url: res.data[3][0],
          error: ""
        });
      })
      .catch(err => this.setState({ error: err.message }));
  };
// render() {
    return (
      <div>
        <Container style={{ minHeight: "100vh" }}>
          <h1 className="text-center">Search For Anything on Wikipedia</h1>
          <Alert type="danger" style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}>
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            results={this.state.search}
          />
          <SearchResults
            title={this.state.title}
            description={this.state.description}
            url={this.state.url}
          />
        </Container>
      </div>
    );
  
}

export default Search;

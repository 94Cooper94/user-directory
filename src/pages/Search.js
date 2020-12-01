import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    users: [],
    // results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base users and update this.state.users
  componentDidMount() {
    API.getUserList()
      .then(res => {
        console.log(res);
        this.setState({ users: res.data.data })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By User!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleInputChange={this.handleInputChange}
            users={this.state.users}
          />
          <SearchResults users={this.state.users} search={this.state.search} />
        </Container>
      </div>
    );
  }
}

export default Search;


import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetchSongs";

class CreateSong extends Component {
  // slightly different implementation here
  constructor(props) {
    super(props);

    this.state = { title: "" };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props
      .mutate({
        variables: { title: this.state.title },
        refetchQueries: [{ query }],
      })
      .then(() => hashHistory.push("/"));
  }

  render() {
    return (
      <div className="container">
        <Link to="/">Back</Link>
        <form onSubmit={this.onSubmit.bind(this)}>
          <h4>Create A Song</h4>
          <label>
            <h5>Title:</h5>
            <input
              onChange={(event) => this.setState({ title: event.target.value })}
              value={this.state.title}
              type="text"
              name="title"
            />
          </label>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(CreateSong);

import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { lyric: "" };
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        id: this.props.songId,
        content: this.state.lyric,
      },
    });
    // clear the input field
    this.setState({ lyric: "" });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>
          <h6>Add lyrics to your track</h6>
          <input
            onChange={(event) => this.setState({ lyric: event.target.value })}
            value={this.state.lyric}
            type="text"
            name="lyric"
          />
        </label>
      </form>
    );
  }
}

// this is a mutation
const mutation = gql`
  mutation addLyric($id: ID!, $content: String) {
    addLyricToSong(songId: $id, content: $content) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);

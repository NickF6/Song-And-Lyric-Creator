import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class LyricList extends Component {
  likeLyric(id, likes) {
    this.props.mutate({
      variables: { id },
      // this is very cool
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    });
  }

  lyricList() {
    return this.props.lyrics.map((lyric) => {
      return (
        <li className="collection-item" key={lyric.id}>
          {lyric.content}
          <span className="right">{lyric.likes}</span>
          <i
            className="material-icons right"
            onClick={() => this.likeLyric(lyric.id, lyric.likes)}
          >
            thumb_up
          </i>
        </li>
      );
    });
  }

  render() {
    return <ul className="collection">{this.lyricList()}</ul>;
  }
}

const mutation = gql`
  mutation likeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
      content
    }
  }
`;

export default graphql(mutation)(LyricList);

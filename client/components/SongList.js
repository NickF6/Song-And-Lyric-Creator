import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import query from "../queries/fetchSongs";

class SongList extends Component {
  onDeleteHandler(id, event) {
    this.props
      .mutate({ variables: { id } })
      .then(() => this.props.data.refetch());
    // prevent route push when song is delete
    event.stopPropagation();
  }

  onClickHandler(id) {
    hashHistory.push("/songs/" + id);
  }

  songList(songs) {
    const styling = {
      cursor: "pointer",
    };
    return songs ? (
      songs.map((song) => {
        return (
          <li
            key={song.id}
            onClick={() => this.onClickHandler(song.id)}
            className="collection-item"
          >
            {song.title}
            <i
              className="material-icons right"
              style={styling}
              onClick={(event) => this.onDeleteHandler(song.id, event)}
            >
              delete{" "}
            </i>
          </li>
        );
      })
    ) : (
      <li> loading... </li>
    );
  }

  render() {
    return (
      <div>
        <h4>Song and Lyric Creator. Add a tune!</h4>
        <ul className="collection">{this.songList(this.props.data.songs)}</ul>
        <Link to="/songs/new">
          <a className="btn-floating btn-large waves-effect waves-light blue right">
            <i className="material-icons">add</i>
          </a>
        </Link>
      </div>
    );
  }
}

const mutation = gql`
  mutation deleteSong($id: ID) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

export default graphql(mutation)(graphql(query)(SongList));

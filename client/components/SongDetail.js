import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";
import query from "../queries/fetchSong";

class SongDetail extends Component {
  showSong(data) {
    return data.loading ? "Loading..." : data.song.title;
  }

  getSong(data) {
    return data.loading ? null : data.song.id;
  }

  getLyrics(data) {
    return data.loading ? [] : data.song.lyrics;
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Song Details</h3>
        <h4>Title: {this.showSong(this.props.data)}</h4>
        <LyricList lyrics={this.getLyrics(this.props.data)} />
        <LyricCreate songId={this.getSong(this.props.data)} />
      </div>
    );
  }
}

export default graphql(query, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);

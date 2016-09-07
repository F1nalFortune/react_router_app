import React from 'react';
import $ from 'jquery';

class Songs extends React.Component {
  constructor(props) {
    super(props);
    this.addSong = this.addSong.bind(this);
    this.state = { songs: [] }
  }

  //initialize something from dom - navbar - componentDidMount
  //Get songs from database
  componentWillMount() {
    $.ajax({
      url: '/api/songs',
      type: 'GET',
    }).done( songs => {
      this.setState({ songs });
    });
  }


  addSong(e) {
    e.preventDefault();
    $.ajax({
      url: '/api/songs',
      type: 'POST',
      data: {
        title: this.refs.title.value,
        artist: this.refs.artist.value,
        lyrics: this.refs.lyrics.value
      }
    }).done( song => {
      this.refs.form.reset();
      this.setState({
        songs: [ {...song}, ...this.state.songs ]
      })
    });
  }


  render() {
    let songs = this.state.songs.map( song => {
      return (
        <li key={song._id} className="collection-item">{song.title}</li>
      );
    });

    return(
      <div className="row">
        <form className="col m4" ref="form" onSubmit={this.addSong}>
          <input ref="title" placeholder="title" />
          <input ref="artist" placeholder="artist" />
          <textarea ref="lyrics"></textarea>
          <button className="btn" type="submit">Add Song</button>
        </form>
        <ul className="col m8 collection">
          {songs}
        </ul>
      </div>
    )
  }
}

export default Songs;
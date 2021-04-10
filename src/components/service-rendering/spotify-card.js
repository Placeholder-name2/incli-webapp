import Card from 'react-bootstrap/Card';
import React from 'react';

export default class SpotifyCard extends React.Component {
  render() {
    return (
      <Card>
        <div>Trending right now on Spotify: {this.spotifyData.playlistName}</div>
        <iframe
          title="spotify-test"
          src={this.spotifyData.Url}
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </Card>
    );
  }
}

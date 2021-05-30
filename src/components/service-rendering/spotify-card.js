import Card from 'react-bootstrap/Card';
import React from 'react';

function SpotifyCard(item) {
  return (
    <Card>
      <Card.Body className="d-flex justify-content-center">
        <Card.Title style={{ color: 'black' }} className="d-flex justify-content-center"></Card.Title>
        <ul>
          <div>Trending right now on Spotify: {item.playlistName}</div>
          <iframe
            title="spotify-test"
            src={item.url}
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default SpotifyCard;

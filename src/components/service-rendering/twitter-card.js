import Card from 'react-bootstrap/Card';
import React from 'react';
import { Tweet } from 'react-twitter-widgets';

function TwitterCard(item) {
  return (
    <div>
      <Card>
        <Card.Body className="d-flex justify-content-center">
          <Card.Title style={{ color: 'black' }} className="d-flex justify-content-center"></Card.Title>
          <ul>
            <div>Trending right now on Twitter: {item.hashtag} </div>
            <Tweet tweetId={item.tweetid}></Tweet>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TwitterCard;

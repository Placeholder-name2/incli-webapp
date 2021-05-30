import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import getDatabaseItems from '../dynamodb/database';
import TwitterCard from './service-rendering/twitter-card';
import SpotifyCard from './service-rendering/spotify-card';

class InfinityScroll extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
    twitterItems: null,
    isLoaded: false,
    spotifyItems: null,
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 })),
      });
    }, 1500);
  };

  componentDidMount() {
    const fetchDBItems = async () => {
      const spotifyItems = await getDatabaseItems('spotify').catch((error) => console.log(error));
      const twitterItems = await getDatabaseItems('twitter').catch((error) => console.log(error));
      this.setState({
        twitterItems: twitterItems,
        spotifyItems: spotifyItems,
      });
      console.log('db items in state', twitterItems);
    };
    fetchDBItems().catch((error) => {
      console.log(error);
    });
  }

  render() {
    if (this.state.twitterItems && this.state.spotifyItems) {
      return (
        <div>
          {console.log(this.state.spotifyItems, 'spot')}
          <h1>Trending is coming</h1>
          <hr />
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {this.state.items.map((i, index) => (
              <div key={index}>
                {console.log(index)}
                <TwitterCard
                  key={index + 100}
                  hashtag={this.state.twitterItems.Items[index].trending_hashtag}
                  tweetid={this.state.twitterItems.Items[index].tweet_id}
                ></TwitterCard>
                <SpotifyCard
                  key={index + 200}
                  url={this.state.spotifyItems.Items[index].url}
                  playlistName={this.state.spotifyItems.Items[index].playlist_name}
                ></SpotifyCard>
              </div>
            ))}
          </InfiniteScroll>
        </div>
      );
    } else {
      return <div>Loading!</div>;
    }
  }
}

export default InfinityScroll;

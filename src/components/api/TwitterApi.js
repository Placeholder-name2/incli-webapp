import React from 'react'
import TwitterItem from './TwitterItem'
import { Tweet } from '../../../node_modules/react-twitter-widgets'

class TwitterApi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [TwitterItem],
            twitterId: "",
            featuringHashtag: ""
        };
    }
    componentDidMount() {

        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const api = `${proxy}https://api.twitter.com/1.1/trends/place.json?id=2459115` //id is currently New York
        this.getTrendingResult(api, proxy);
    }
    getTrendingResult(api, proxy) {
        fetch(api, {
            headers: new Headers({
                'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAFiyKAEAAAAACvhQhi7bqt7Va64ZVz0tjMHzfzw%3DWJXMBvo6MfSjTgjPO0FeIDyc1maDlIIVkjZ66HIh1AoTjDpv8D'
            })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                //here we get 50 trending hashtags, need to create cards for each
                const index = Math.floor(Math.random() * result[0].trends.length)
                this.setState({
                    featuringHashtag: result[0].trends[index].name
                });
                return result[0].trends[index];
            })
            .then(trend => this.getSearchResult(proxy, trend)
            );
    }

    getSearchResult(proxy, trend) {
        return fetch(`${proxy}https://api.twitter.com/1.1/search/tweets.json?q=` + trend.query, {
            headers: new Headers({
                'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAFiyKAEAAAAACvhQhi7bqt7Va64ZVz0tjMHzfzw%3DWJXMBvo6MfSjTgjPO0FeIDyc1maDlIIVkjZ66HIh1AoTjDpv8D'
            })
        })
            .then(searchRes => searchRes.json())
            .then(
                (searchResult) => {
                    console.log(searchResult);
                    this.setState({
                        isLoaded: true,
                        twitterId: searchResult.statuses[0].id_str,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, twitterId, featuringHashtag } = this.state;
        if (error) {
            return <div>Error: Fail</div>;
        } else if (!isLoaded) {
            console.log(twitterId, isLoaded, featuringHashtag)
            return (
                <ul>
                    Loading...
                </ul>
            );
        } else {
            console.log(twitterId)
            return (
                <ul>
                    <div>Trending right now on Twitter: {featuringHashtag}</div>
                    <Tweet tweetId={1352993929474367488}></Tweet>
                </ul>
            );
        }
    }
}
export default TwitterApi;
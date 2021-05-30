// import React from 'react';

// class NyTimesApi extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       spotifyUrl: '',
//       playlistName: '',
//     };
//   }

//   componentDidMount() {
//     this.getFeaturedItems();
//   }
//   getFeaturedItems() {
//     const proxy = 'https://cors-anywhere.herokuapp.com/';
//     const api = `${proxy}https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=K9XBB1A3SRSGzShmIPkz2zsHL0ldsCyn`;
//     console.log();
//     fetch(api)
//       .then((result) => result.json())
//       .then((nyTimesResponse) => {
//         console.log(nyTimesResponse);
//         const index = Math.floor(Math.random() * nyTimesResponse.playlists.items.length);
//         this.setState({
//           spotifyUrl: nyTimesResponse.playlists.items[index].external_urls.spotify.replace(
//             'https://open.spotify.com/',
//             'https://open.spotify.com/embed/'
//           ),
//           playlistName: nyTimesResponse.playlists.items[index].description,
//           isLoaded: true,
//         });
//       });
//   }

//   render() {
//     const { error, isLoaded, spotifyUrl, playlistName } = this.state;
//     if (error) {
//       return <div>Error: Fail</div>;
//     } else if (!isLoaded) {
//       return <ul>Loading...</ul>;
//     } else {
//       console.log(spotifyUrl);
//       return (
//         <ul>
//           <div>Trending right now on New York Times: {playlistName}</div>
//           <iframe
//             title="spotify-test"
//             src={spotifyUrl}
//             width="300"
//             height="380"
//             frameborder="0"
//             allowtransparency="true"
//             allow="encrypted-media"
//           ></iframe>
//         </ul>
//       );
//     }
//   }
// }
// export default NyTimesApi;

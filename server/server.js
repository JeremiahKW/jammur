const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send('Hello World!');
});

const SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId: '98871feea8a64254a453504cf91a8ca5',
  clientSecret: '62561c469e9243deb494665a3bdcd5f9',
});

app.get('/api/artist-top-tracks', (req, res) => {
  spotifyApi.clientCredentialsGrant().then(
    function(data) {
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);

      // Get an artist's top tracks
      spotifyApi.getArtistTopTracks('3AA28KZvwAUcZuOKwyblJQ?si=yIp8bSQiQF2gR0Ul83-dFw', 'US')
        .then(function(data) {
          res.send(data.body);
        }, function(err) {
          console.error(err);
        });
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  );
});

app.listen(5000, () => console.log('Server running on port 5000'));
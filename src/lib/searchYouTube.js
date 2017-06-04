window.YOUTUBE_API_KEY = 'AIzaSyA18atZ7aeS67MULqh2CiPRvhJyyuUEHb0';

var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done((response) => {
    if (callback) {
      callback(response.items);
    }
  })
  .fail((response) => {
    var errors = response.responseJSON.error.errors;
    for (let err of errors) {
      console.log(err);
    }
  });
  console.log(window.YOUTUBE_API_KEY);
};




window.searchYouTube = searchYouTube;

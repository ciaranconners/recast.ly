

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
};




window.searchYouTube = searchYouTube;

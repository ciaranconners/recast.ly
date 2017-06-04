class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoPlayer: null,
      videoList: []
    };
  }

  handleVideoStateChange(video) {
    this.setState({
      videoPlayer: video
    });
  }

  render() {
    return (
      <div>
      <Nav
        handleSearchTermChange={this.getYouTubeVideos.bind(this)}
      />
        <div className="col-md-7">
          <VideoPlayer video={this.state.videoPlayer}/>
        </div>
        <div className="col-md-5">
          <VideoList
            videos={this.state.videoList}
            handleVideoStateChange={this.handleVideoStateChange.bind(this)}/>
        </div>
      </div>
    );
  }


  componentDidMount() {
    this.getYouTubeVideos('cats and dogs');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videoList: videos,
        videoPlayer: videos[0]
      })
    );
  }

}


// only app should be stateful, all else functional stateless

// step 1 => refactor to stateful

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

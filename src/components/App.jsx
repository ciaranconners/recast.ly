// AIzaSyA_ocyZARFoETAUWQ8HGrxG-9qEy7F-jG4

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoPlayer: window.exampleVideoData[0],
      videoList: window.exampleVideoData
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
      <Nav />
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
}


// only app should be stateful, all else functional stateless

// step 1 => refactor to stateful

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

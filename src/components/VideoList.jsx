var VideoList = ({videos, handleVideoStateChange}) => (
  <div className="video-list media">
    {videos.map((video) =>
      <VideoListEntry
        video={video}
        key={video.id.videoId}
        handleVideoStateChange={handleVideoStateChange}
      />)
    }
  </div>
);

// App is entrypoint for data, constructor only for class components

// pass to video list from app, and then to videolist entries


// PropTypes tell other developers what `props` a component expects

// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;



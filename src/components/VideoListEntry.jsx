var VideoListEntry = (videos) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={videos.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{videos.video.snippet.title}</div>
      <div className="video-list-entry-detail">{videos.video.snippet.description}</div>
    </div>
  </div>
);

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       done: false
//     };
//   }
// }

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;

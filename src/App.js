import React, { Component } from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./Apis/Youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount () {
    this.onFormSubmit ('top youtube')
  }
  onFormSubmit = async searchTerm => {
    const resp = await youtube.get("/search", {
      params: {
        q: searchTerm
      }
    });
    this.setState({
      videos: resp.data.items,
      selectedVideo: resp.data.items[0]
    });
  };
  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column ">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;

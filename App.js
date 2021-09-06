import React, { Component } from "react";
import Button from "./components/Button";
import "./assets/css/style.css";
export default class App  extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
      <>
      <div className="app">
        <div>
          <div className="count">
            <h3>Start Counts:</h3>
            <h1>{count}</h1>
          </div>
          <div class="buttons">
            <Button title={"-"} action={this.decrementCount} />
            <Button title={"+"} action={this.incrementCount} />
          </div>
        </div>
        {/* <div>
        <img id = 'image' src = 'https://talkstar-assets.s3.amazonaws.com/production/playlists/playlist_763/48cd6287-f697-4fbe-aaaf-e7fe26fb9f4e/03_Countdown_TED.com_Playlist-art_2000x2000.jpg'/>
        </div> */}
      </div>
        
    
        </>
















    );
  }
}











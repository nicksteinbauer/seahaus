import React, { Component } from 'react'

import YouTube from 'react-youtube';

export default class Video extends Component {
  render() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            mute: 1,
            modestbranding: 1,
            iv_load_policy: 3,
            playsinline: 1,
            enablejsapi: 1,
            mute: 1
        },
        };
    return (
      <YouTube videoId="QuvlQaXn1Ps" opts={opts} onReady={this._onReady} />
    )
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

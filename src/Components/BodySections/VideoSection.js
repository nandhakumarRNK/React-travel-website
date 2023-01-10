import React, { Component } from "react";
import video from "../../assets/video/video.mp4";

export class VideoSection extends Component {
  render() {
    /*==================== VIDEO ====================*/

    function playPause() {
      const videoFile = document.getElementById("video-file"),
        videoButton = document.getElementById("video-button"),
        videoIcon = document.getElementById("video-icon");
      if (videoFile.paused) {
        videoFile.play();
        videoIcon.classList.add("ri-pause-line");
        videoIcon.classList.remove("ri-play-line");
      } else {
        videoFile.pause();
        videoIcon.classList.remove("ri-pause-line");
        videoIcon.classList.add("ri-play-line");
      }
    }

    function finalVideo() {
      const videoIcon = document.getElementById("video-icon");
      videoIcon.classList.remove("ri-pause-line");
      videoIcon.classList.add("ri-play-line");
    }

    return (
      <div>
        <section class="video section">
          <h2 class="section__title">Video Tour</h2>

          <div class="video__container container">
            <p class="video__description">
              Find out more with our video of the most beautiful and pleasant
              places for you and your family.
            </p>

            <div class="video__content">
              <video id="video-file" onEnded={finalVideo}>
                <source src={video} type="video/mp4" />
              </video>
              <button
                class="button button--flex video__button"
                id="video-button"
                onClick={playPause}
              >
                <i class="ri-play-line video__button-icon" id="video-icon"></i>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default VideoSection;

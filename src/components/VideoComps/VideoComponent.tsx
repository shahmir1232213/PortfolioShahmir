import React, { useEffect, useRef } from 'react';
import './VideoComponent.css';

function VideoComponent({ myVideo, isActive }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isActive) {
      // Play only if the slide is active
      videoRef.current.play().catch((err) => {
        // Catch autoplay errors in some browsers
        console.log("Autoplay prevented:", err);
      });
    } else {
      videoRef.current.pause(); // Pause inactive videos
      videoRef.current.currentTime = 0; // Optional: reset to start
    }
  }, [isActive]);

  return (
    <div className="videoDiv">
      <video
        ref={videoRef}
        className="video-element"
        controls
        playsInline
        muted
        poster={myVideo.poster}
      >
        <source src={myVideo.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;

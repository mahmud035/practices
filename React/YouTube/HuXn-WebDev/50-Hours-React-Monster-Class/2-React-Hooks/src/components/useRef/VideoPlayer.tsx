import { useRef, useState } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      setIsPlaying((prev) => !prev);

      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
    }
  };

  return (
    <>
      <button onClick={handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
      <video
        width="250"
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

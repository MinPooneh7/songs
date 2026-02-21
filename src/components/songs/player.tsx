import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Repeat, SkipForward, SkipBack } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MusicPlayerProps {
  audioSrc: string;
  className?: string;
  next: string | null;
  prev: string | null;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  audioSrc,
  next,
  prev,
  className,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const navigate = useNavigate();

  const onPrev = () => navigate(`/songs/${prev}`);

  const onNext = () => navigate(`/songs/${next}`);

  // Load metadata
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  // Play / Pause toggle
  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      await audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  // Loop toggle
  const toggleLoop = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = !isLooping;
    setIsLooping(!isLooping);
  };

  // Seek
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = Number(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Format time
  const formatTime = (time: number) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = async () => {
      try {
        await audio.play();
      } catch (err: unknown) {
        setIsPlaying(false);
        console.error(err);
      }
    };

    tryPlay();
  }, [audioSrc]);

  return (
    <div
      className={`flex flex-col gap-2.5 p-4 bg-linear-to-r from-secondary to-primary rounded-xl shadow-lg text-white w-full ${className}`}
    >
      <audio ref={audioRef} src={audioSrc} autoPlay />
      <div className="flex gap-2">
        <div className="flex items-center gap-2 w-full">
          <span className="text-sm w-10">{formatTime(currentTime)}</span>

          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={handleSeek}
            className="flex-1 accent-black cursor-pointer"
          />

          <span className="text-sm w-10 text-right">
            {formatTime(duration)}
          </span>
        </div>
        <button
          onClick={toggleLoop}
          className={`transition ${
            isLooping
              ? "text-black hover:text-gray-700"
              : "text-white hover:text-gray-700"
          }`}
        >
          <Repeat />
        </button>
      </div>
      {/* Controls */}
      <div className="flex justify-center items-center gap-4 mb-3">
        <button
          onClick={onPrev}
          disabled={!prev}
          className="disabled:text-gray-500 hover:text-black"
        >
          <SkipBack />
        </button>

        <button
          onClick={togglePlay}
          className="p-4 bg-black hover:bg-blue-950 rounded-full transition"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>

        <button
          onClick={onNext}
          disabled={!next}
          className="disabled:text-gray-400 hover:text-black"
        >
          <SkipForward />
        </button>
      </div>

      {/* Progress */}
    </div>
  );
};

export default MusicPlayer;

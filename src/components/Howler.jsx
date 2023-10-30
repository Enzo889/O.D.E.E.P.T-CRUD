import React, { useState, useEffect, useRef } from "react";
import { Howl, Howler } from "howler";
import {
  GiNextButton,
  GiPreviousButton,
  GiPauseButton,
  GiPlayButton,
} from "react-icons/gi";

const songs = [
  "Prologo.mp3",
  "Nunca quise.mp3",
  "Las cosas que no se tocan.mp3",
  "Fuiste lo mejor.mp3",
  "Fuego ft Calamaro.mp3",
  "Necesito.mp3",
  "[Bonus] No tengo ganas.mp3",
  // Agrega más canciones aquí
];

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [songPosition, setSongPosition] = useState(0);
  const [currentSongName, setCurrentSongName] = useState("");
  const [currentDuration, setCurrentDuration] = useState("0:00");
  const [currentTime, setCurrentTime] = useState("0:00");
  const soundRef = useRef(null);
  const progressBarRef = useRef(null);

  const playAudio = () => {
    if (!isPlaying) {
      const newSound = new Howl({
        src: [`sounds/${songs[currentSongIndex]}`],
        onend: () => {
          nextSong();
        },
        onload: () => {
          soundRef.current.seek(songPosition);
          if (isPlaying) {
            newSound.play();
          }
        },
        onplay: () => {
          requestAnimationFrame(updateProgressBar);
        },
      });

      newSound.play();
      soundRef.current = newSound;
      setIsPlaying(true);
      setCurrentSongName(formatSongName(songs[currentSongIndex]));
      setCurrentDuration(formatTime(soundRef.current.duration()));
    } else {
      soundRef.current.pause();
      setSongPosition(soundRef.current.seek());
      setIsPlaying(false);
    }
  };

  const changeSong = (newIndex) => {
    if (isPlaying) {
      soundRef.current.stop();
      setIsPlaying(false);
    }
    setCurrentSongIndex(newIndex);
    setCurrentSongName("");
    setCurrentTime("0:00");
  };

  const nextSong = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    changeSong(newIndex);
    setSongPosition(0);
    playAudio();
  };

  const prevSong = () => {
    const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    changeSong(newIndex);
    setSongPosition(0);
    playAudio();
  };

  const updateProgressBar = () => {
    if (soundRef.current && progressBarRef.current) {
      const progress =
        (soundRef.current.seek() / soundRef.current.duration()) * 100;
      progressBarRef.current.value = progress;
      setCurrentTime(formatTime(soundRef.current.seek()));
      requestAnimationFrame(updateProgressBar);
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const formatSongName = (song) => {
    return song.replace(".mp3", ""); // Elimina la extensión .mp3
  };

  useEffect(() => {
    playAudio();
  }, [currentSongIndex]);

  return (
    <div className="music  justify-center ">
      <div className="flex justify-center">
        <p className="mb-2 font-serif  hover:line-through decoration-2 decoration-solid dark:decoration-black ">
          {currentSongName}
        </p>
      </div>
      <div className="flex  max-md:hidden justify-between items-center ">
        <p className="mr-2">{currentTime}</p>
        <input
          ref={progressBarRef}
          className=" m-auto h-8 appearance-none in-range:block  in-range:rounded  in-range:dark:bg-stone-800 in-range:bg-[#dce0e4] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:block [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-[#b9c9d6] [&::-webkit-slider-thumb]:dark:bg-black "
          type="range"
          min="0"
          max="100"
          step="0.01"
          defaultValue="0"
          onChange={(e) => {
            const seekTo = (e.target.value / 100) * soundRef.current.duration();
            soundRef.current.seek(seekTo);
          }}
        />
        <p className="ml-2">{currentDuration}</p>
      </div>
      <div className="flex justify-center  gap-6 mt-2">
        <button onClick={prevSong}>
          <GiPreviousButton />
        </button>
        <button onClick={playAudio} className="block">
          {isPlaying ? <GiPauseButton /> : <GiPlayButton />}
        </button>
        <button onClick={nextSong}>
          <GiNextButton />{" "}
        </button>
      </div>
    </div>
  );
}

export default MusicPlayer;

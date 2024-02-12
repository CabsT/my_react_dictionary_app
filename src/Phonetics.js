import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  const [phonetics, setPhonetics] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(null);

  const playAudio = () => {
    const audioElement = document.getElementById("yourAudioElementId");
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch((error) => {
          console.error("Error playing audio:", error);
          setError("No audio available");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  function showResponse(response) {
    const phoneticData = response.data[0].phonetics[1];
    setPhonetics(phoneticData);
    if (!phoneticData.audio){
      setError("No audio available")
      
    }
    console.log(response.data[0].phonetics[1]);

  }
  useEffect(() => {
    const apiPhonetics = `https://api.dictionaryapi.dev/api/v2/entries/en/${props.keyword}`;
    axios
      .get(apiPhonetics)
      .then(showResponse)
      .catch((error) => {
        console.error("Error fetching phonetics");
        setError("Error fetching phonetics");
      });
    setLoaded(true);
  }, [props.keyword]);

  if (loaded) {
    return (
      <p>
        <FontAwesomeIcon
          icon={faVolumeHigh}
          style={{ cursor: "pointer", color: "rgb(138, 18, 83)" }}
          onClick={playAudio}
        />
        <audio
          src={phonetics.audio}
          id="yourAudioElementId"
          type="audio/mp3"
        ></audio>
        {error && (
          <span className="ps-2" style={{ color: "red", font: "caption" }}>
            {error}
          </span>
        )}
      </p>
    );
  } else return null;
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "./DictionaryForm.css";

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
    if (response.data && response.data.length > 0) {
      const firstEntry = response.data[0];

      if (firstEntry.phonetics && firstEntry.phonetics.length > 0) {
        const phoneticData = firstEntry.phonetics[0];

        if (phoneticData.audio) {
          setPhonetics(phoneticData);
          setError(null);
        } else {
          setError("No audio available");
        }

        console.log(phoneticData);
      } else {
        setError("Phonetic data not found in the response");
      }
    } else {
      setError("No data found in the response");
    }
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
          className="audio"
        />

        <audio
          src={phonetics.audio}
          id="yourAudioElementId"
          type="audio/mp3"
        ></audio>
        {error && (
          <span className="ps-2" style={{ color: "red", fontSize:"14px", verticalAlign:"middle" }}>
            {error}
          </span>
        )}
      </p>
    );
  } else return null;
}

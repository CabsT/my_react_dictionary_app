import React, { useState } from "react";
import axios from "axios";
import DisplayData from "./DisplayData";
import Images from "./Images";
import dict1 from "./photos/dict1.jpg";
import dict2 from "./photos/dict2.jpg";
import dict3 from "./photos/dict3.jpg";
import dict4 from "./photos/dict4.jpg";
import dict5 from "./photos/dict5.jpg";
import dict6 from "./photos/dict6.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "./DictionaryForm.css";
import "./Meanings.css";

export default function DictionaryForm() {
  const [wordData, setWordData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [images, setImages] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const dictImages = [dict1, dict2, dict3, dict4, dict5, dict6];

  const api_call = async (e) => {
    e.preventDefault();
    const word = e.target.elements.word.value;

    if (!word) {
      setAlertMessage("Enter a word");
      return;
    }

    const apiKey = "f0t6f37fo7eacab2cf93452fbe48b35c";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;

    try {
      const response = await axios.get(apiUrl);

      if (!response.data || Object.keys(response.data).length === 0) {
        setAlertMessage(`${word} not found`);
        setLoaded(false);
        return;
      }

      const apiPhotoUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${apiKey}`;
      const photorequest = await axios.get(apiPhotoUrl);
      const photoreponse = photorequest;
      setLoaded(true);
      setWordData(response.data);
      setKeyword(response.data.word);
      setImages(photoreponse.data);
      setAlertMessage("");
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setAlertMessage("An error occurred while fetching data");
      setLoaded(false);
    }
  };

  const playAudio = () => {
    const audioElement = document.getElementById("yourAudioElementId");
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (loaded) {
    return (
      <div>
        <form onSubmit={api_call} className="d-flex justify-content-center">
          <input
            name="word"
            type="search"
            autoFocus="on"
            placeholder="Type a word to search..."
            className="search rounded"
          />
          <div>
            <button
              type="submit"
              className="searchbtn rounded ms-3  px-4 w-100"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />
            </button>
          </div>
        </form>
        {alertMessage && <div style={{ color: "red" }}>{alertMessage}</div>}

        <div>
          {wordData && (
            <DisplayData
              wordData={wordData}
              keyword={keyword}
              setKeyword ={setKeyword}
            />
          )}
        </div>
        <div>
          {images && <Images images={images.photos} keyword={keyword} />}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <form
          onSubmit={api_call}
          className="d-flex justify-content-center mb-2"
        >
          <input
            name="word"
            type="search"
            autoFocus="on"
            placeholder="Type a word to search..."
            className="search rounded"
          />
          <div>
            <button
              type="submit"
              className="searchbtn rounded ms-3  px-4 w-100"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />
            </button>
          </div>
        </form>
        {alertMessage && <div style={{ color: "red" }}>{alertMessage}</div>}
        <div>
          <p className="text-center mt-5 fs-4">
            <div>
              <p className=" fs-2 fw-bold phonetic mt-2 text-center ">
                dictionary{" "}
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faVolumeHigh}
                  style={{ cursor: "pointer", color: "rgb(138, 18, 83)" }}
                  onClick={playAudio}
                />
                <audio
                  id="yourAudioElementId"
                  src="https://api.dictionaryapi.dev/media/pronunciations/en/dictionary-uk.mp3"
                  type="audio/mp3"
                ></audio>
                <span className="ms-2 text-dark text-opacity-75">
                  /'dɪkʃə,nɛri/
                </span>
              </p>
            </div>
          </p>
        </div>
        <div className="dictionary rounded">
          <p className="text-center noun fs-5">noun</p>
          <p className="text-center">
            a reference book containing an alphabetical list of words with
            information about them
          </p>
        </div>
        <div>
          <div className="row mt-4 d-flex justify-content-center">
            {dictImages.map((image, index) => (
              <div key={index} className="col-md-4 image-container">
                <img src={image} alt="dictionary" className="img-fluid" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

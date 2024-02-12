import React from "react";
import Meanings from "./Meanings"
import Phonetics from "./Phonetics";


export default function DisplayData(props) {
  return (
    <div className="row">
      <div>
        <p className=" fs-2 fw-bold phonetic mt-2 text-center ">
          {props.wordData.word}
        </p>
        <div className="d-flex justify-content-center fs-4">
          {props.keyword && (
            <Phonetics setKeyword={props.setKeyword} keyword={props.keyword} />
          )}
          {props.wordData.phonetic ? (
            <span className="ms-2 text-dark text-opacity-75">
              /{props.wordData.phonetic}/
            </span>
          ) : (
            <span className="ms-2 text-danger">
              Phonetic not available for this word.
            </span>
          )}
        </div>
      </div>
      <div>
        {props.wordData.meanings && <Meanings data={props.wordData.meanings} />}
      </div>
    </div>
  );
}

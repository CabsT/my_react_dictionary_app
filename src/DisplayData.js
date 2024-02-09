import React from "react";
import Meanings from "./Meanings"
import Phonetics from "./Phonetics";

export default function DisplayData(props) {
  return (
    <div className="row">
      <div>
        <p className="text-bold phonetic mt-5 text-center">
          {props.keyword && <Phonetics setKeyword ={props.setKeyword} keyword ={props.keyword}/>}
          <span className="fw-bold fs-2 d-flex justify-content-center">
            {props.wordData.word}
          </span>
          /{props.wordData.phonetic}/
        </p>
      </div>
      <div>
        {props.wordData.meanings && <Meanings data={props.wordData.meanings} />}
      </div>
    </div>
  );
}

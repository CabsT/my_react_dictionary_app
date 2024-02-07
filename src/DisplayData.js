import React from "react";
import Meanings from "./Meanings"

export default function DisplayData(props) {
  return (
    <div className="row">
      <div className="col">
        <p className="text-bold">{props.wordData.phonetic}</p>
      </div>
      <div className="row">
        {props.wordData.meanings && <Meanings data={props.wordData.meanings} />}
      </div>
    </div>
  );
}

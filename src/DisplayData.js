import React from "react";
import Meanings from "./Meanings"

export default function DisplayData(props) {
  return (
    <div className="row">
      <div className="col">{props.wordData.phonetic}</div>
      <div className="row">
        <Meanings data={props.wordData.meanings}  />
      </div>
    </div>
  );
}

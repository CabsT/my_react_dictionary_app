import React from "react";

export default function Meanings(props) {
  console.log(props.data);
  return (
    <div>
      {props.data.map(function (meaning, index) {
        return (
          <div key={index}>
            <div>{meaning.partOfSpeech}</div>
            <div>{meaning.definition}</div>
            <div>{meaning.example}</div>
          </div>
        );
      })}
    </div>
  );
}

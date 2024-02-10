import React from "react";
import "./Meanings.css";

export default function Synonyms(props) {
  return (
    <div>
      {" "}
      <p className="text-center synonym fw-bold mb-0">
          synonym:
      </p>
      <div className="text-center">
        {props.synonym.map(function (eachsynonym, index) {
          return <div key={index}>{eachsynonym}</div>;
        })}
      </div>
    </div>
  );
}

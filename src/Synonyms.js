import React from "react";
import "./Meanings.css";

export default function Synonyms(props) {
  return (
    <div className="meaning rounded my-3">
      {" "}
      <p className="text-center synonym fw-bold mb-0 ">synonym:</p>
      <div className="d-sm-flex justify-content-center text-center">
        {props.synonym.slice(0, 4).map(function (eachsynonym, index) {
          return (
            <div className="mx-3 mb-3" key={index}>
              {" "}
              {eachsynonym}
            </div>
          );
        })}
      </div>
    </div>
  );
}

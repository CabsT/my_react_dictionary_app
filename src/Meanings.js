import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  console.log(props.data);
  return (
    <div>
      {props.data.map(function (meaning, index) {
        return (
          <div key={index}>
            <div className="meaning rounded my-3">
                <p className="text-center">
                  <span className="partOfSpeech">{meaning.partOfSpeech} </span>
                  <br />
                  <span className="definition text-center d-flex justify-content-evenly">
                    {" "}
                    {meaning.definition}
                  </span>
                </p>
          
              
                {meaning.example && <Examples example={meaning.example} />}
              
                {meaning.synonyms && <Synonyms synonym={meaning.synonyms} />}
             
            </div>
          </div>
        );
      })}
    </div>
  );
}

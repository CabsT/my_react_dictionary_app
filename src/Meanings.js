import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props.data);
  return (
    <div>
      {props.data.map(function (meaning, index) {
        return (
          <div key={index}>
            <div className="meaning rounded">
                <p className=" text-center">
                  <span className="partOfSpeech">{meaning.partOfSpeech} </span>
                  <br />
                  <span className="definition text-center d-flex justify-content-evenly">
                    {" "}
                    {meaning.definition}
                  </span>
                </p>
          
              <p>
                {" "}
                {meaning.example && <Examples example={meaning.example} />}
              </p>
              <p>
                {meaning.synonyms && <Synonyms synonym={meaning.synonyms} />}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

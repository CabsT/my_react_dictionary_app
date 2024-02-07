import React from "react";
import "./Meanings.css";

export default function Synonyms(props){
    return (
      <div>
        {" "}
        <p className="text-center pb-2">
          <span className="synonym fw-bold">
            synonym:
            <br />
          </span>
          {props.synonym}
        </p>
      </div>
    );
}
import React from "react";
import "./Meanings.css"

export default function Examples(props){

    return (
      <div>
        {" "}
        <p className="text-center pb-2">
          <span className="example fw-bold">
            example:
            <br />
          </span>
          {props.example}
        </p>
      </div>
    );
}
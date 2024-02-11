import React from "react";
import "./Meanings.css"

export default function Examples(props){

    return (
      <div className="meaning rounded my-3">
        {" "}
        <p className="text-center">
          <span className="example fw-bold">
            example:
            <br />
          </span>
          {props.example}
        </p>
      </div>
    );
}
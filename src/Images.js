import React from "react";
import "./Images.css";

export default function Images(props) {
  console.log(props.images);
  return (
    <div className="row mt-4 d-flex justify-content-center ">
      {props.images.slice(0, 6).map(function (image, index) {
        return (
          <div className="col-4 image-container" key={index}>
            <img
              src={image.src.landscape}
              alt={props.keyword}
              className="img-fluid"
            />
          </div>
        );
      })}
    </div>
  );
}

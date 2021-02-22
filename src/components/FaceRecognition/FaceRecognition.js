import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = (props) => {
  const style = {
    top: props.box.topRow,
    bottom: props.box.bottomRow,
    left: props.box.leftCol,
    right: props.box.rightCol,
  };

  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputimage"
          src={props.imageUrl}
          alt="sample"
          width="400px"
          height="auto"
        />
        <div className="bounding-box" style={style}></div>
      </div>
    </div>
  );
};

export default FaceRecognition;

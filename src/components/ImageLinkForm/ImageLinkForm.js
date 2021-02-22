import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = (props) => {
  return (
    <div>
      <p className="magic f3">{`This Magic Man will detect faces in your pictures. Give it a try`}</p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={props.onInputChange}
          />
          <button
            className="w-30 grow f4 ph3 link pv dib white bg-light-purple"
            onClick={props.onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;

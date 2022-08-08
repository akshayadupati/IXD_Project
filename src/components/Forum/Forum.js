import React, { useState } from "react";
import "./Forum.scss";
import nativeImage from "../../../src/nativeImage.png";
import banglaImage from "../../../src/banglaImage.png";

function Forum() {
  const [imageState, setImageState] = useState(true);

  const handleImage = (val) => {
    if (val) {
      setImageState(true);
    } else {
      setImageState(false);
    }
  };
  return (
    <div>
      <div className="btn-group">
        <button onClick={() => handleImage(true)}>English</button>
        <button onClick={() => handleImage(false)}>Bangla</button>
      </div>
      <div className="img-class">
        <img
          className="mail-image"
          src={imageState ? nativeImage : banglaImage}
        />
      </div>
    </div>
  );
}

export default Forum;

import React from "react";
import img from "../../Images/logo192.png";

function CustomIcon(props) {
  return (
    <>
      <a href="https://hoodieanalytics.com/" target="_blank">
        <img
          src={`${img}`}
          alt="hoodieIcon"
          height={props.height}
          width={props.width}
        />
      </a>
    </>
  );
}

export default CustomIcon;

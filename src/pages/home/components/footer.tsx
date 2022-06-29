import React from "react";
import Banana from "../../../asset/image 1.png";
import Monkey from "../../../asset/Mask group.png";

export default function Footer() {
  return (
    <div className="home-footer">
      <div className="image-area-banana">
        <img src={Banana} alt="banana"></img>
      </div>
      <div className="image-area-monkey">
        <img src={Monkey} alt="monkey"></img>
      </div>
      <div className="image-area-banana">
        <img src={Banana} alt="banana"></img>
      </div>
      <div className="image-area-monkey">
        <img src={Monkey} alt="monkey"></img>
      </div>
      <div className="image-area-banana">
        <img src={Banana} alt="banana"></img>
      </div>
      <div className="image-area-monkey">
        <img src={Monkey} alt="monkey"></img>
      </div>
      <div className="image-area-banana">
        <img src={Banana} alt="banana"></img>
      </div>
      <div className="image-area-monkey">
        <img src={Monkey} alt="monkey"></img>
      </div>
    </div>
  );
}

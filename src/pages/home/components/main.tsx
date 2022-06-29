import React, { useState } from "react";
import Host from "../../../asset/LINE_ALBUM_班級名冊頭貼_220124.jpg";
import Gitlab from "../../../asset/gitlab.png";
import Github from "../../../asset/github.png";
export default function Main() {
  const [visible, setVisible] = useState(false);
  function mainContentVisible() {
    setVisible(true);
  }

  return (
    <div className="main">
      <div className="main-title">
        <h1>Daniel</h1>
        <h1>Website</h1>
      </div>
      <div className="main-image" onMouseEnter={mainContentVisible}>
        <img src={Host} alt="陳柏鈺" />
        <div
          className="main-content"
          style={visible ? { display: "block" } : { display: "none" }}
        >
          <h1>臺北科技大學</h1>
          <h1>互動設計系</h1>
          <div className="main-content-image">
            <img src={Gitlab} alt="" />
            <img src={Github} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

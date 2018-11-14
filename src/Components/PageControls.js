import React from "react";

import arrowUp from "../Images/SVG/arrow-up2.svg";
import arrowDown from "../Images/SVG/arrow-down2.svg";

const scrollToTop = () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};

const scrollToBottom = () => {
  window.scrollTo(0, document.body.scrollHeight);
};

const PageControls = () => {
  return (
    <aside>
      <div className="scroll scrollToTop" onClick={scrollToTop}>
        <img src={arrowUp} alt="Up Arrow" />
      </div>
      <div className="scroll scrollToBottom" onClick={scrollToBottom}>
        <img src={arrowDown} alt="Down Arrow" />
      </div>
    </aside>
  );
};

export default PageControls;

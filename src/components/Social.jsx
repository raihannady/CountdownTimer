import React from "react";
import iconfb from "../assets/images/icon-facebook.svg";
import iconpin from "../assets/images/icon-pinterest.svg";
import iconinsta from "../assets/images/icon-instagram.svg";

const Social = () => {
  return (
    <>
      <div className="icon">
        <div className="facebook">
          <img src={iconfb} alt="" />
        </div>
        <div className="pinterest">
          <img src={iconpin} alt="" />
        </div>
        <div className="instagram">
          <img src={iconinsta} alt="" />
        </div>
      </div>
    </>
  );
};

export default Social;

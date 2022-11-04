import React from "react";
import image1 from "../../images/Group 1.png";
import "./card.css";
const CardRight = () => {
  return (
    <div className="card-frame right">
      <div className="card-image">
        <img src={image1} alt="" />
      </div>
      <div className="card-info">
        <div className="card-title">Merchants</div>
        <div className="card-desc">
          We enable merchants to access FMCG products at the best prices
          delivered to your shop within hours, access inventory loans and earn
          more income by selling digital financial services such as airtime,
          electricity tokens and bill payments
        </div>
      </div>
    </div>
  );
};

export default CardRight;

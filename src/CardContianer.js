import React from "react";
import cardMapping from "./CardMapping";
function CardContianer({ currentCard }) {
  let address = "";
  if (currentCard) {
    address = `./image/${cardMapping[currentCard]}.jpg`;
  } else {
    address = cardMapping[0];
  }
  return (
    <div className="cardContainer">
      <img src={address} alt={address}></img>
    </div>
  );
}

export default CardContianer;

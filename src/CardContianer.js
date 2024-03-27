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
    <div className="flex justify-center items-center">
      <img
        src={address}
        alt={address}
        className="max-w-full max-h-full"
        style={{ maxWidth: "600px", maxHeight: "400px" }}
      ></img>
    </div>
  );
}

export default CardContianer;

import React from "react";

function CardContianer({ currentCard }) {
  const cardMapping = {
    1: "AC",
    2: "2C",
    3: "3C",
    4: "4C",
    5: "5C",
    6: "6C",
    7: "7C",
    8: "8C",
    9: "9C",
    10: "10C",
    11: "JC",
    12: "QC",
    13: "KC",
    14: "AD",
    15: "2D",
    16: "3D",
    17: "4D",
    18: "5D",
    19: "6D",
    20: "7D",
    21: "8D",
    22: "9D",
    23: "10D",
    24: "JD",
    25: "QD",
    26: "KD",
    27: "AH",
    28: "2H",
    29: "3H",
    30: "4H",
    31: "5H",
    32: "6H",
    33: "7H",
    34: "8H",
    35: "9H",
    36: "10H",
    37: "JH",
    38: "QH",
    39: "KH",
    40: "AS",
    41: "2S",
    42: "3S",
    43: "4S",
    44: "5S",
    45: "6S",
    46: "7S",
    47: "8S",
    48: "9S",
    49: "10S",
    50: "JS",
    51: "QS",
    52: "KS",
  };
  console.log(currentCard);
  const address = `./image/${cardMapping[currentCard]}.jpg`;

  return (
    <div>
      <img src={address} alt={address}></img>
    </div>
  );
}

export default CardContianer;

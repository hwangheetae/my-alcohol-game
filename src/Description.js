import React from "react";

function Description() {
  return (
    <div>
      <h1>게임방법</h1>
      <ul>
        <li>게임은 총 52장의 카드로 진행됨.</li>
        <li>다음 카드가 현재카드보다 높으면 Up</li>
        <li>다음 카드가 현재카드보다 낮으면 Down</li>
        <li>다음 카드가 현재카드보다 같으면 Stay</li>
      </ul>
      <br />
      맞추면 다른사람에게, 틀리면 술1잔을 마시고 재도전!
      <br />
      <br />
      만약 Stay를 성공시 나머지 사람들이 술 2잔씩!
    </div>
  );
}

export default Description;

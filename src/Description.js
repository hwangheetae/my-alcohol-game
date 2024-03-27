import React from "react";

function Description() {
  return (
    <div className="p-4 bg-gray rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">게임방법</h1>
      <ul className="list-disc pl-4 text-center">
        <li>게임은 총 52장의 카드로 진행됨.</li>
        <li>
          다음 카드가 현재카드보다 높으면{" "}
          <span className="font-bold text-red-500">Up</span>
        </li>
        <li>
          다음 카드가 현재카드보다 낮으면{" "}
          <span className="text-blue-500 font-bold">Down</span>
        </li>
        <li>
          다음 카드가 현재카드보다 같으면{" "}
          <span className="font-bold text-green-500">Stay</span>
        </li>
      </ul>
      <p className="mt-4">
        맞추면 다른 사람에게, 틀리면{" "}
        <span className="font-bold text-xl"> 술 1잔</span>을 마시고 재도전!
      </p>
      <p className="mt-4">
        만약 <span className="font-bold">Stay</span>를 성공시 나머지 사람들이
        <span className="font-bold text-xl"> 술 2잔씩!</span>
      </p>
    </div>
  );
}

export default Description;

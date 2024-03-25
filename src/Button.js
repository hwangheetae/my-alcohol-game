import React from "react";

function Button({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>NEXT</button>
    </div>
  );
}

export default Button;

import React from "react";

function Button({ onClick, value }) {
  return (
    <div>
      <button onClick={onClick}>{value}</button>
    </div>
  );
}

export default Button;

import React from "react";

function Button({ onClick, value }) {
  return (
    <div>
      <button
        className="       mx-8
        my-4
        px-4
        py-2
        bg-blue-500
        text-white
        font-semibold
        rounded
        border
        border-blue-700
        hover:bg-blue-700"
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
}

export default Button;

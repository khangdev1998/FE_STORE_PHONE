import React from "react";

const ButtonMain = ({ text, onClick }) => {
  return (
    <button className={`btn w-100 btn-primary p-2 lh-lg`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonMain;

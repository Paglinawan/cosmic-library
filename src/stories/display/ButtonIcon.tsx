import React from "react";
import IconTranslate from "../../app/Svg/IconTranslate";

const ButtonIcon = ({}) => {
  return (
    <button
      type="button"
      className="relative w-8 h-8 transition-all text-body hover:text-subtle"
    >
      <div className="relative z-10 w-full">
        <IconTranslate />
      </div>
      <div className="absolute z-0 inset-0 rounded-full bg-display-button-icon"></div>
    </button>
  );
};

export default ButtonIcon;

import React from "react";
import classNames from "classnames";

interface SwitchProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Item: React.FC<SwitchProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "w-full text-base px-3 py-2 border-l border-current text-body text-left",
        {
          "font-bold": isActive,
          "opacity-40 hover:opacity-100 transition-opacity": !isActive,
        }
      )}
    >
      {label}
    </button>
  );
};

export default Item;

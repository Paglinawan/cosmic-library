import React from "react";
import classNames from "classnames";

interface Props {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Item: React.FC<Props> = ({ label, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "text-sm px-2 py-1 text-body whitespace-nowrap select-none",
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

import React from "react";
import classNames from "classnames";

interface Props {
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
}

const ItemVertical: React.FC<Props> = ({
  icon,
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      className={classNames("text-body flex flex-col items-center", {
        "opacity-20 transition-opacity hover:opacity-100": !isActive,
      })}
      onClick={onClick}
    >
      <div className="w-8 h-8">{icon}</div>
      <p className="font-en text-sm">{label}</p>
    </button>
  );
};

export default ItemVertical;

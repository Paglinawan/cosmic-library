import React from "react";
import classNames from "classnames";

interface Props {
  label: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick: () => void;
}

const ItemHorizontal: React.FC<Props> = ({
  icon,
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        "text-body flex gap-1 items-center rounded py-0.5 px-1 w-full",
        {
          "transition-all hover:bg-navigation-global-nav-hover": !isActive,
          "bg-navigation-global-nav-hover": isActive,
        }
      )}
      onClick={onClick}
    >
      <div className="w-5 h-5">{icon}</div>
      <p className="font-en text-base">{label}</p>
    </button>
  );
};

export default ItemHorizontal;

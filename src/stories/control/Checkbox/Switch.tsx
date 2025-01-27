import React, { useState } from "react";
import classNames from "classnames";

interface Props {
  disabled?: boolean;
}

const Switch: React.FC<Props> = ({ disabled = false }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        if (!disabled) setIsActive((prev) => !prev);
      }}
      className={classNames("h-6 w-10 rounded-full", {
        "bg-control-switch-track-inactive": !isActive && !disabled,
        "bg-control-switch-track-disabled": disabled,
        "bg-control-switch-track-active": isActive,
      })}
      aria-label={isActive ? "Switch on" : "Switch off"}
    >
      <div className="relative inline-flex items-center px-0.5 h-full">
        <span
          className={classNames(
            "absolute h-5 w-5 rounded-full transition-all",
            {
              "left-0 bg-control-switch-thumb": isActive,
              "left-full -translate-x-full bg-control-switch-thumb": !isActive,
              "bg-control-switch-thumb-disabled": disabled,
            }
          )}
        />
      </div>
    </button>
  );
};

export default Switch;

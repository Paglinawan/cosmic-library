import React from "react";
import IconMenu from "../../../app/Svg/IconMenu";
import Logo from "../../../app/Svg/LogoAnimated";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  return (
    <header className="px-4 py-3">
      <div className="flex gap-4 items-center">
        <button className="w-8 h-8">
          <IconMenu />
        </button>
        <button className="w-8 h-8">
          <Logo />
        </button>
      </div>
    </header>
  );
};

export default Header;

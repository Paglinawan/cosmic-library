import React from "react";
import ItemVertical from "./ItemVertical";
import ItemHorizontal from "./ItemHorizontal";
import IconFilm from "../../../app/Svg/IconFilm";

interface Props {
  screen: "desktop" | "mobile";
}

const GlobalNav: React.FC<Props> = ({ screen }) => {
  const [navItems, setNavItems] = React.useState([
    {
      label: "Film",
      icon: <IconFilm />,
      isActive: true,
    },
  ]);
  const handleClick = (label: string) => {
    setNavItems((prevItems) =>
      prevItems.map((item) =>
        item.label === label ? { ...item, isActive: !item.isActive } : item
      )
    );
  };
  return (
    <>
      {screen === "mobile" && (
        <nav className="relative h-full">
          <ul className="relative h-full z-10 w-40 px-3 py-8 rounded-tr-3xl rounded-br-3xl bg-navigation-global-nav-hover">
            {navItems.map((item) => (
              <li key={item.label}>
                <ItemHorizontal
                  icon={item.icon}
                  label={item.label}
                  isActive={item.isActive}
                  onClick={() => handleClick(item.label)}
                />
              </li>
            ))}
          </ul>
          <span className="z-0 absolute inset-0 bg-navigation-global-nav-backdrop backdrop-blur-md"></span>
        </nav>
      )}
      {screen === "desktop" && (
        <nav className="w-16 min-w-12 p-8 border-r border-navigation-global-nav">
          <ul className="flex flex-col gap-8 items-center">
            {navItems.map((item) => (
              <li className="w-12 h-12" key={item.label}>
                <ItemVertical
                  icon={item.icon}
                  label={item.label}
                  isActive={item.isActive}
                  onClick={() => handleClick(item.label)}
                />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default GlobalNav;

import classNames from "classnames";
import IconFilm from "../../app/Svg/IconFilm";
import IconMenu from "../../app/Svg/IconMenu";

interface Props {
  classSize: string;
  classColor?: string;
  styleColor?: string;
}

const Navigation: React.FC<Props> = ({ classSize, classColor, styleColor }) => {
  return (
    <ul className="flex flex-wrap gap-4">
      <li
        className={classNames(classSize, classColor)}
        style={{ color: styleColor }}
      >
        <IconFilm />
      </li>
      <li
        className={classNames(classSize, classColor)}
        style={{ color: styleColor }}
      >
        <IconMenu />
      </li>
    </ul>
  );
};

export default Navigation;

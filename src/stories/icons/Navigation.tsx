import IconFilm from "../../app/Svg/IconFilm";
import classNames from "classnames";

interface Props {
  classSize: string;
  classColor?: string;
  styleColor?: string;
}

const Navigation: React.FC<Props> = ({ classSize, classColor, styleColor }) => {
  return (
    <div
      className={classNames(classSize, classColor)}
      style={{ color: styleColor }}
    >
      <IconFilm />
    </div>
  );
};

export default Navigation;

import classNames from "classnames";
import IconTranslate from "../../app/Svg/IconTranslate";

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
        <IconTranslate />
      </li>
    </ul>
  );
};

export default Navigation;

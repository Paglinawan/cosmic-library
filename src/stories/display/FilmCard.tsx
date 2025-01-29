import React from "react";
import classNames from "classnames";
import Tag from "./Tag";
import TagClassic from "./TagClassic";
import TagFavorite from "./TagFavorite";
import ButtonIcon from "./ButtonIcon";

interface Props {
  title: string;
  review: number;
  year: number;
  country: string;
  comment: string;
  director?: string;
  cast?: string;
  tags?: string[];
  isClassic?: boolean;
  isFavorite?: boolean;
}

const FilmCard: React.FC<Props> = ({
  title,
  review,
  year,
  country,
  comment,
  director,
  cast,
  tags,
  isClassic,
  isFavorite,
}) => {
  const [isMore, setIsMore] = React.useState(false);
  const displayMore = director || cast;

  return (
    <article className="relative pt-6 pb-9 px-5 rounded-lg border border-display-film-card max-w-80 flex flex-col gap-4">
      <div className="absolute right-3 bottom-3">
        <ButtonIcon />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-1 flex-wrap">
          {isClassic && <TagClassic />}
          {isFavorite && <TagFavorite />}
          {tags && tags.map((tag) => <Tag key={tag} label={tag} />)}
        </div>
        <h4 className="text-xl leading-6 text-body">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 justify-between">
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={classNames("text-base", {
                "text-display-star": index < review,
                "text-subtle": index >= review,
              })}
            >
              ★
            </span>
          ))}
        </div>
        <div className="flex gap-1 items-center text-subtle text-xs">
          <span>{year}</span>
          <span>/</span>
          <span>{country}</span>
        </div>
      </div>
      <p className="text-subtle text-xs">{comment}</p>
      {isMore && (
        <div className="flex flex-col gap-3 text-subtle text-xs">
          {director && (
            <div>
              <p className="pl-2 font-bold border-current border-l-2">監督</p>
              <p>{director}</p>
            </div>
          )}
          {cast && (
            <div>
              <p className="pl-2 font-bold border-current border-l-2">
                キャスト
              </p>
              <p>{cast}</p>
            </div>
          )}
        </div>
      )}
      {displayMore && (
        <button
          type="button"
          className="text-subtle text-xs border-t border-current pt-1 text-center opacity-40"
          onClick={() => setIsMore(!isMore)}
        >
          {isMore ? "閉じる" : "もっと見る"}
        </button>
      )}
    </article>
  );
};

export default FilmCard;

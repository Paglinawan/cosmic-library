import React, { useState, useEffect, useCallback } from "react";
import Item from "./Item";
import classNames from "classnames";

interface Props {
  filmTags: {
    id: number;
    label: string;
    isActive: boolean;
    isDisplay: boolean;
  }[];
  maxDisplayCount: number;
}

const PageSideNav: React.FC<Props> = ({ filmTags, maxDisplayCount }) => {
  const [tagsState, setTagsState] = useState(filmTags);

  const handleSwap = useCallback(() => {
    const nonDisplayTags = tagsState.filter(
      (tag) => !tag.isActive && !tag.isDisplay
    );
    const swapCount =
      maxDisplayCount - tagsState.filter((tag) => tag.isActive).length;
    const nextTags = nonDisplayTags
      .sort(() => Math.random() - 0.5)
      .slice(0, swapCount);

    setTagsState((currentTags) =>
      currentTags.map((currentTag) => {
        // 未選択かつ表示中のタグのリセット
        if (currentTag.isDisplay && !currentTag.isActive) {
          return { ...currentTag, isDisplay: false };
        }
        // 表示タグの入れ替え
        return nextTags.some((nextTag) => nextTag.id === currentTag.id)
          ? { ...currentTag, isDisplay: true }
          : currentTag;
      })
    );
  }, []);

  useEffect(() => {
    handleSwap();
  }, [handleSwap, maxDisplayCount]);

  const handleReset = () => {
    setTagsState((prev) =>
      prev.map((tag) => ({
        ...tag,
        isActive: false,
      }))
    );
  };

  const handleSelect = (id: number) => {
    setTagsState((tags) =>
      tags.map((tag) =>
        tag.id === id
          ? {
              ...tag,
              isActive: !tag.isActive,
              isDisplay: tag.isActive ? tag.isDisplay : true,
            }
          : tag
      )
    );
  };

  const reachedMaxSelect =
    tagsState.filter((tag) => tag.isActive).length === maxDisplayCount;

  return (
    <>
      <ul className="w-40 flex flex-col">
        {tagsState
          .filter((tag) => tag.isDisplay)
          .map((tag) => (
            <li
              key={tag.id}
              className={classNames({ "-order-1": tag.isActive })}
            >
              <Item
                label={tag.label}
                isActive={tag.isActive}
                onClick={() => handleSelect(tag.id)}
              />
            </li>
          ))}
      </ul>
      {reachedMaxSelect ? (
        <button
          type="button"
          onClick={handleReset}
          className="w-full text-base px-3 py-2 border-l border-current text-body text-left opacity-40"
        >
          ... 選択をリセット
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSwap}
          className="w-full text-base px-3 py-2 border-l border-current text-body text-left opacity-40"
        >
          ... 他を見る
        </button>
      )}
    </>
  );
};

export default PageSideNav;

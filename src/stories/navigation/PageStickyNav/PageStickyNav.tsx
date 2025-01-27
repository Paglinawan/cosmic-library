import React, { useState } from "react";
import Item from "./Item";
import classNames from "classnames";

interface Props {
  filmTags: {
    id: number;
    label: string;
    isActive: boolean;
  }[];
}

const PageStickyNav: React.FC<Props> = ({ filmTags }) => {
  const [tagsState, setTagsState] = useState(filmTags);

  const handleSelect = (id: number) => {
    setTagsState((tags) =>
      tags.map((tag) =>
        tag.id === id
          ? {
              ...tag,
              isActive: !tag.isActive,
            }
          : tag
      )
    );
  };

  return (
    <ul className="fixed bottom-0 left-0 right-0 overflow-x-auto flex align-center gap-1 pt-3 pb-2 px-1 bg-navigation-page-sticky-nav">
      {tagsState.map((tag) => (
        <li key={tag.id} className={classNames({ "-order-1": tag.isActive })}>
          <Item
            label={tag.label}
            isActive={tag.isActive}
            onClick={() => handleSelect(tag.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default PageStickyNav;

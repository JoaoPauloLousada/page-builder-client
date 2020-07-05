import React from "react";
import BComponents from ".";
import IBComponentObject from "./interfaces/IBComponentObject";

export const createComponent = (comp: IBComponentObject) => {
  const TagName = BComponents[comp.type];

  // If component has children, render children
  if (comp.children && comp.children.length > 0) {
    return (
      <TagName key={comp.id} data_key={comp.id}>
        {comp.children.map((child: IBComponentObject) =>
          createComponent(child)
        )}
      </TagName>
    );
  }

  // It doesn't have any children
  return (
    <TagName key={comp.id} data_key={comp.id}>
      {}
    </TagName>
  );
};

import React from "react";
import BComponents from ".";
import IBComponentObject from "./interfaces/IBComponentObject";
import { getComponent } from "../../store/components/helper";

export const createComponent = (
  comp: IBComponentObject,
  tree: IBComponentObject[]
) => {
  const TagName = BComponents[comp.type];
  //@ts-ignore

  // If component has children, render children
  if (comp.children && comp.children.length > 0) {
    return (
      <TagName key={comp.id} data_key={comp.id}>
        {comp.children.map((child) =>
          createComponent(getComponent(tree, child), tree)
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

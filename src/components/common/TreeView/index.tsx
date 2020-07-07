import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import Branch from "./Branch";

export default function TreeView() {
  const { components: componentsTree } = useSelector(
    (state: RootState) => state.components
  );

  return (
    <div>
      {componentsTree.map((component) => (
        <div className="py-2" key={component.id}>
          <Branch component={component} />
        </div>
      ))}
    </div>
  );
}

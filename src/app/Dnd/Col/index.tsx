import React from "react";
import { useDrag } from "react-dnd";
import DraggableTypes from "../DraggableTypes.enum";
import BComponentType from "../../../bootstrap-module/components/enums/BComponentType.enum";
import { generateID } from "../../../utils/id";
import { IBComponentObjectDraggable } from "../intefaces";
import DraggableWrapper from "../common/DraggableWrapper";
import { createGridProperties } from "../../../bootstrap-module/components/dataStructures/createGridProperties";

export default function ColDraggable() {
  const component: IBComponentObjectDraggable = {
    name: "Col",
    id: generateID(),
    type: BComponentType.col,
    properties: createGridProperties(),
  };

  const [{ isDragging }, drag] = useDrag({
    item: { type: DraggableTypes.GRID, component },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <DraggableWrapper>
      <div ref={drag}>Col</div>
    </DraggableWrapper>
  );
}

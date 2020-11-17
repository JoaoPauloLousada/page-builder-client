import React from "react";
import { useDrag } from "react-dnd";
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";
import { generateID } from "../../../utils/id";
import { IBComponentObjectDraggable } from "../../../app/Dnd/intefaces";
import DraggableWrapper from "../../../app/Dnd/common/DraggableWrapper";
import BComponentType from "../../enums/BComponentType.enum";
import { createGridProperties } from "../../dataStructures/createGridProperties";

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

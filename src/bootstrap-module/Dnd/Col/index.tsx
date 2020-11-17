import React from "react";
import { useDrag } from "react-dnd";
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";
import { IBComponentObjectDraggable } from "../../../app/Dnd/intefaces";
import DraggableWrapper from "../../../app/Dnd/common/DraggableWrapper";
import { getCol } from "../../dataStructures/draggableComponents";

export default function ColDraggable() {
  const component: IBComponentObjectDraggable = getCol();

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

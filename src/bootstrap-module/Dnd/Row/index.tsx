import React from "react";
import { useDrag } from "react-dnd";
import { generateID } from "../../../utils/id";
import { IBComponentObjectDraggable } from "../../../app/Dnd/intefaces";
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";
import DraggableWrapper from "../../../app/Dnd/common/DraggableWrapper";
import BComponentType from "../../enums/BComponentType.enum";
import { createGridProperties } from "../../dataStructures/createGridProperties";

function RowDragglabe() {
  const component: IBComponentObjectDraggable = {
    name: "Row",
    id: generateID(),
    type: BComponentType.row,
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
      <div ref={drag}>Row</div>
    </DraggableWrapper>
  );
}

export default RowDragglabe;

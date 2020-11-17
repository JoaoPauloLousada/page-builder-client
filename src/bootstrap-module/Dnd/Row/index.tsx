import React from "react";
import { useDrag } from "react-dnd";
// import DraggableTypes from "../DraggableTypes.enum";
import BComponentType from "../../../bootstrap-module/components/enums/BComponentType.enum";
import { generateID } from "../../../utils/id";
import { createGridProperties } from "../../../bootstrap-module/components/dataStructures/createGridProperties";
import { IBComponentObjectDraggable } from "../../../app/Dnd/intefaces";
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";
import DraggableWrapper from "../../../app/Dnd/common/DraggableWrapper";

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

import React from "react";
import { useDrag } from "react-dnd";
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";
import DraggableWrapper from "../../../app/Dnd/common/DraggableWrapper";
import { getRow } from "../../dataStructures/draggableComponents";

function RowDragglabe() {
  const component = getRow()

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

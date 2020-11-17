import React from "react";
import { useDrag } from "react-dnd";
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";
import DraggableWrapper from "../../../app/Dnd/common/DraggableWrapper";
import { getContainer } from "../../dataStructures/draggableComponents";

function ContainerDraggable() {
  const component = getContainer();

  const [{ isDragging }, drag] = useDrag({
    item: { type: DraggableTypes.GRID, component },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <DraggableWrapper>
      <div ref={drag}>Container</div>
    </DraggableWrapper>
  );
}

export default ContainerDraggable;

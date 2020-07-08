import React from "react";
import { generateID } from "../../../utils/id";
import BComponentType from "../../../components/bootstrap/enums/BComponentType.enum";
import { useDrag } from "react-dnd";
import DraggableTypes from "../DraggableTypes.enum";
import { IBComponentObjectDraggable } from "../intefaces";
import DraggableWrapper from "../common/DraggableWrapper";

function ContainerDraggable() {
  const component: IBComponentObjectDraggable = {
    name: "Container",
    id: generateID(),
    type: BComponentType.container,
  };

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
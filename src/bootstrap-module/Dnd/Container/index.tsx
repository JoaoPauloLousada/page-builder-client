import React from "react";
import { generateID } from "../../../utils/id";
import { useDrag } from "react-dnd";
import { IBComponentObjectDraggable } from "../../../app/Dnd/intefaces";
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";
import DraggableWrapper from "../../../app/Dnd/common/DraggableWrapper";
import BComponentType from "../../enums/BComponentType.enum";
import { createGridProperties } from "../../dataStructures/createGridProperties";

function ContainerDraggable() {
  const component: IBComponentObjectDraggable = {
    name: "Container",
    id: generateID(),
    type: BComponentType.container,
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
      <div ref={drag}>Container</div>
    </DraggableWrapper>
  );
}

export default ContainerDraggable;

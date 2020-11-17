import React from "react";
import { generateID } from "../../../utils/id";
import BComponentType from "../../../bootstrap-module/components/bootstrap/enums/BComponentType.enum";
import { useDrag } from "react-dnd";
import DraggableTypes from "../DraggableTypes.enum";
import { IBComponentObjectDraggable } from "../intefaces";
import DraggableWrapper from "../common/DraggableWrapper";
import { createGridProperties } from "../../../bootstrap-module/components/bootstrap/dataStructures/createGridProperties";

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

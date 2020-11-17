import React from "react";
import { generateID } from "../../../utils/id";
import BComponentType from "../../../bootstrap-module/components/enums/BComponentType.enum";
import { useDrag } from "react-dnd";
import { createGridProperties } from "../../../bootstrap-module/components/dataStructures/createGridProperties";
import { IBComponentObjectDraggable } from "../../../app/Dnd/intefaces";
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";
import DraggableWrapper from "../../../app/Dnd/common/DraggableWrapper";

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

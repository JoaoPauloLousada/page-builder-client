import React from "react";
import { useDrag } from "react-dnd";
import DraggableTypes from "../DraggableTypes.enum";
import { generateID } from "../../../utils/id";
import { IBComponentObjectDraggable } from "../intefaces";
import DraggableWrapper from "../common/DraggableWrapper";
import BComponentType from "../../../bootstrap-module/enums/BComponentType.enum";

export default function TypographyDragglabe() {
  const component: IBComponentObjectDraggable = {
    name: "Typography",
    id: generateID(),
    type: BComponentType.typography,
  };

  const [{ isDragging }, drag] = useDrag({
    item: { type: DraggableTypes.TYPOGRAHPY, component },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <DraggableWrapper>
      <div ref={drag}>Typography</div>
    </DraggableWrapper>
  );
}

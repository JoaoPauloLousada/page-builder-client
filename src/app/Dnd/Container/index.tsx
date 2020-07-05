import React from "react";
import { generateID } from "../../../utils/id";
import BComponentType from "../../../components/bootstrap/enums/BComponentType.enum";
import { useDrag } from "react-dnd";
import DraggableTypes from "../DraggableTypes.enum";
import IBComponentObject from "../../../components/bootstrap/interfaces/IBComponentObject";

function ContainerDraggable() {
  const component: IBComponentObject = {
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
    <div
      ref={drag}
      style={{ backgroundColor: "blue", opacity: isDragging ? 0.5 : 1 }}
    >
      Container Draggable
    </div>
  );
}

export default ContainerDraggable;

import React from "react";
import { useDrag } from "react-dnd";
import DraggableTypes from "../DraggableTypes.enum";
import BComponentType from "../../../components/bootstrap/enums/BComponentType.enum";
import IBComponentObject from "../../../components/bootstrap/interfaces/IBComponentObject";
import { generateID } from "../../../utils/id";

function RowDragglabe() {
  const component: IBComponentObject = {
    name: "Row",
    id: generateID(),
    type: BComponentType.row,
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
      Row Draggable
    </div>
  );
}

export default RowDragglabe;

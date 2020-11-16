import React from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import DraggableTypes from "./DraggableTypes.enum";
import { updateComponents } from "../../store/components";
import IBComponentObject from "../../components/bootstrap/interfaces/IBComponentObject";
import { useDispatch } from "react-redux";

export default function DroppableArea({ children }: any) {
  const dispatch = useDispatch();

  const [{ isOver, ...collectedProps }, drop] = useDrop({
    accept: DraggableTypes.GRID,
    drop: (e: { type: string; component: IBComponentObject }, m) => {
      console.log("ITEM DROPPED!", e);
      // dispatch(updateComponents(e.component));
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{ height: "100%", width: "100%", backgroundColor: "yellow" }}
    >
      {children}
    </div>
  );
}

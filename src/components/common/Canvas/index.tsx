import React from "react";
import { RootState } from "../../../store/rootReducer";
import { useSelector } from "react-redux";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { useDispatch } from "react-redux";
import { createComponent } from "../../bootstrap/builder";
import IBComponentObject from "../../bootstrap/interfaces/IBComponentObject";
import { updateComponents } from "../../../store/components";
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";

export default function Canvas() {
  const { components } = useSelector((state: RootState) => state.components);

  const dispatch = useDispatch();

  const [{ isOver, ...collectedProps }, drop] = useDrop({
    accept: DraggableTypes.GRID,
    drop: (e: { type: string; component: IBComponentObject }, m) => {
      if (!m.didDrop()) {
        e.component.parentId = "CANVAS";
        dispatch(updateComponents(e.component));
      }
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className="h-100">
      {components.length > 0 &&
        components.map((component: IBComponentObject) =>
          createComponent(component)
        )}
    </div>
  );
}

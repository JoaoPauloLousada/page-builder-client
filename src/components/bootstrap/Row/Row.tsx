import React from "react";
import { Props, getClasses } from "./RowHelper";
import IBComponentObject from "../interfaces/IBComponentObject";
import { updateComponents } from "../../../store/components";
import { useDispatch } from "react-redux";
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";
import { DropTargetMonitor, useDrop } from "react-dnd";
import { editModeStyle } from "../../../utils/style";
import { mergeAll } from "../../../utils/objectsUtil";

const Row: React.FC<Props> = ({
  children,
  customClass,
  data_key,
  droppable = true,
  customStyle = {},
}: Props) => {
  const dispatch = useDispatch();

  const [{ isOver, ...collectedProps }, drop] = useDrop({
    accept: DraggableTypes.GRID,
    drop: (e: { type: string; component: IBComponentObject }, m) => {
      if (!droppable) return;
      if (!m.didDrop()) {
        e.component.parentId = data_key;
        dispatch(updateComponents(e.component));
      }
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      className={getClasses(customClass)}
      ref={drop}
      style={mergeAll(editModeStyle(), customStyle)}
    >
      {children}
    </div>
  );
};

export default Row;

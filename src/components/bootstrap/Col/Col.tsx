import React from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { Props, getClasses } from "./ColHelper";
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";
import IBComponentObject from "../interfaces/IBComponentObject";
import { useDispatch } from "react-redux";
import { updateComponents } from "../../../store/components";
import { editModeStyle } from "../../../utils/style";
import { mergeAll } from "../../../utils/objectsUtil";

const Col: React.FC<Props> = ({
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  data_key,
  droppable = true,
  customStyle = {},
}: Props) => {
  const dispatch = useDispatch();
  const classes = getClasses(xs, sm, md, lg, xl);

  const [{ isOver, ...collectedProps }, drop] = useDrop({
    accept: [DraggableTypes.GRID, DraggableTypes.TYPOGRAHPY],
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
      className={`col${classes}`}
      ref={drop}
      style={mergeAll(editModeStyle(), customStyle)}
    >
      {children}
    </div>
  );
};

export default Col;

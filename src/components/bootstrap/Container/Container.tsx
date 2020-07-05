import React, { useEffect } from "react";
import { getClasses, Props } from "./ContainerHelper";
import { useDispatch } from "react-redux";
import { useDrop, DropTargetMonitor } from "react-dnd";
import IBComponentObject from "../interfaces/IBComponentObject";
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";
import { updateComponents } from "../../../store/components";
import { editModeStyle } from "../../../utils/style";

const Container: React.FC<Props> = ({
  children,
  fluid,
  customClass,
  data_key,
  droppable = true,
}: Props) => {
  const classes = React.useMemo(() => getClasses(customClass, fluid), [
    customClass,
    fluid,
  ]);

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
    <div className={classes} ref={drop} style={editModeStyle()}>
      {children}
    </div>
  );
};

export default Container;

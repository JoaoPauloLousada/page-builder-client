import React, { useRef } from "react";
import { Props, getClasses } from "./ColHelper";
import { useDrag } from 'react-dnd'
import { useDrop } from 'react-dnd'
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";
import { generateID } from "../../../utils/id";

const Col: React.FC<Props> = ({ children, xs, sm, md, lg, xl }: Props) => {
  const classes = getClasses(xs, sm, md, lg, xl);

  const ref = useRef<HTMLDivElement>(null);

  const [collectedDragProps, drag] = useDrag({
    item: { id: generateID(), type: DraggableTypes.GRID }
  })

  const [collectedDropProps, drop] = useDrop({
    accept: [DraggableTypes.GRID]
  })

  drag(drop(ref))

  return <div className={`col${classes}`} ref={ref}>{children}</div>;
};

export default Col;

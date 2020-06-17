import React from "react"
import { useDrop } from "react-dnd"
import DraggableTypes from "../../app/Dnd/DraggableTypes.enum"
import Draggable from "../Draggable"

export default function(){
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: DraggableTypes.GRID,
    drop: (item, monitor) => console.log("dropped", item, monitor),
    collect: (mon) => ({
      isOver: !!mon.isOver(),
      canDrop: !!mon.canDrop()
    })
  })

  return (
    <div ref={drop} style={{height: "100%", backgroundColor: "yellow", width: '100%'}}>
      <div>droppable</div>
      <Draggable />
    </div>
  )
}

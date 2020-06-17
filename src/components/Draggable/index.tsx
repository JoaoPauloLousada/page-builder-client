import React from "react"
import { useDrag } from 'react-dnd'
import DraggableTypes from "../../app/Dnd/DraggableTypes.enum"

export default function(){
  const [{isDragging}, drag] = useDrag({
    item: { type: DraggableTypes.GRID },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  return <div ref={drag} style={{
    opacity: isDragging ? 0.5 : 1,
    fontSize: 25,
    fontWeight: 'bold',
    cursor: 'move',
    backgroundColor: 'blue',
    height: "25px",
    width: '100%'
  }}> draggable</div>
}

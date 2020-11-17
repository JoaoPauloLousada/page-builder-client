import React from "react";
import ColDraggable from "../../../../app/Dnd/Col";
import RowDragglabe from "../../../../app/Dnd/Row";
import ContainerDraggable from "../../../../app/Dnd/Container";
import { generateID } from "../../../../utils/id";
import TypographyDragglabe from "../../../../app/Dnd/Typography";

const draggableComponents = [
  {
    id: generateID(),
    component: ContainerDraggable,
  },
  {
    id: generateID(),
    component: RowDragglabe,
  },
  {
    id: generateID(),
    component: ColDraggable,
  },
  {
    id: generateID(),
    component: TypographyDragglabe,
  },
];

export default function BComponentsArea() {
  return (
    <div>
      {draggableComponents.map((element) => (
        <element.component key={element.id} />
      ))}
    </div>
  );
}

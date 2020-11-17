import React from "react";
import ColDraggable from "../../Dnd/Col";
import { generateID } from "../../../utils/id";
import TypographyDragglabe from "../../../app/Dnd/Typography";
import ContainerDraggable from "../../Dnd/Container";
import RowDragglabe from "../../Dnd/Row";

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

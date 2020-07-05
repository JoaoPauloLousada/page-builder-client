import React from "react";
import ColDraggable from "../../../app/Dnd/Col";
import RowDragglabe from "../../../app/Dnd/Row";
import ContainerDraggable from "../../../app/Dnd/Container";

export default function BComponentsArea() {
  return (
    <div>
      <ColDraggable />
      <RowDragglabe />
      <ContainerDraggable />
    </div>
  );
}

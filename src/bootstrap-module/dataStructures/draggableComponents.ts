import { generateID } from "./../../utils/id";
import { IBComponentObjectDraggable } from "./../../app/Dnd/intefaces";
import BComponentType from "../enums/BComponentType.enum";
import { createGridProperties } from "./createGridProperties";

export const getCol = (): IBComponentObjectDraggable => ({
  name: "Col",
  id: generateID(),
  type: BComponentType.col,
  properties: createGridProperties(),
});

export const getRow = (): IBComponentObjectDraggable => ({
  name: "Row",
  id: generateID(),
  type: BComponentType.row,
  properties: createGridProperties(),
});

export const getContainer = (): IBComponentObjectDraggable => ({
  name: "Container",
  id: generateID(),
  type: BComponentType.container,
  properties: createGridProperties(),
});

import BComponentType from "../../bootstrap-module/enums/BComponentType.enum";

export interface IBComponentObjectDraggable {
  name: string;
  id: string;
  type: BComponentType;
  properties?: any;
}

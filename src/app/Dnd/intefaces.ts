import BComponentType from "../../bootstrap-module/components/bootstrap/enums/BComponentType.enum";

export interface IBComponentObjectDraggable {
  name: string;
  id: string;
  type: BComponentType;
  properties?: any;
}

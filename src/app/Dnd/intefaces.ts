import BComponentType from "../../components/bootstrap/enums/BComponentType.enum";

export interface IBComponentObjectDraggable {
  name: string;
  id: string;
  type: BComponentType;
  properties?: any;
}

import BComponentType from "../enums/BComponentType.enum";

interface IBComponentObject {
  id: string;
  name: string;
  type: BComponentType;
  parentId?: string;
  children?: IBComponentObject[];
}

export default IBComponentObject;

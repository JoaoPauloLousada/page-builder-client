import { IGridProperties, ITypographyProperties } from "../../app/interfaces";
import BComponentType from "../enums/BComponentType.enum";

interface IBComponentObject {
  id: string;
  name: string;
  type: BComponentType;
  parentId?: string;
  properties?: any;
  children?: string[];
}

export interface IBGridOject extends IBComponentObject {
  properties?: IGridProperties;
}

export interface IBTypography extends IBComponentObject {
  properties?: ITypographyProperties;
}

export default IBComponentObject;

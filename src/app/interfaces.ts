import { UIFrameworkEnum } from "./enums";

export interface IConfigState {
  UIFramework: UIFrameworkEnum;
}

export interface IDefaultComponentProp {
  name: string;
  type: string;
  inputType: string;
  value: string;
}
export interface ISpacingProperties {
  padding: IDefaultComponentProp;
  paddingLeft: IDefaultComponentProp;
  paddingRight: IDefaultComponentProp;
  paddingTop: IDefaultComponentProp;
  paddingBottom: IDefaultComponentProp;
  margin: IDefaultComponentProp;
  marginLeft: IDefaultComponentProp;
  marginRight: IDefaultComponentProp;
  marginTop: IDefaultComponentProp;
  marginBottom: IDefaultComponentProp;
}

export interface IGridProperties extends ISpacingProperties {}

export interface ITypographyProperties extends ISpacingProperties {
  variant: string;
  text: string;
}

export interface IPage {
  id: string;
  name: string;
}

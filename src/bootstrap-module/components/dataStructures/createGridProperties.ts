import { IGridProperties } from "./../../../app/interfaces";

const defaultStringProp = {
  type: "string",
  inputType: "text",
  value: "",
};

export function createGridProperties(
  properties?: IGridProperties
): IGridProperties {
  const padding = properties?.padding || {
    name: "padding",
    ...defaultStringProp,
  };
  const paddingLeft = properties?.paddingLeft || {
    name: "padding-left",
    ...defaultStringProp,
  };
  const paddingRight = properties?.paddingRight || {
    name: "padding-right",
    ...defaultStringProp,
  };
  const paddingTop = properties?.paddingTop || {
    name: "padding-top",
    ...defaultStringProp,
  };
  const paddingBottom = properties?.paddingBottom || {
    name: "padding-bottom",
    ...defaultStringProp,
  };
  const margin = properties?.margin || { name: "margin", ...defaultStringProp };
  const marginLeft = properties?.marginLeft || {
    name: "margin-left",
    ...defaultStringProp,
  };
  const marginRight = properties?.marginRight || {
    name: "margin-right",
    ...defaultStringProp,
  };
  const marginTop = properties?.marginTop || {
    name: "margin-top",
    ...defaultStringProp,
  };
  const marginBottom = properties?.marginBottom || {
    name: "margin-bottom",
    ...defaultStringProp,
  };

  return {
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
  };
}

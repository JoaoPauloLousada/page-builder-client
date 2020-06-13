import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export const classPrefix = ["", "sm-", "md-", "lg-", "xl-"];

export const getClasses = (...sizes: Array<number | undefined>): string => {
  console.log(sizes);
  return sizes.reduce((acc, curr, idx) => {
    return `${acc}${curr ? ` col-${classPrefix[idx]}${curr}` : ""}`;
  }, "");
};

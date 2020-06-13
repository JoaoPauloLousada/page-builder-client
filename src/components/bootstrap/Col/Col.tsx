import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const classPrefix = ["", "sm-", "md-", "lg-", "xl-"];

const getClasses = (...sizes: Array<number | undefined>): string => {
  console.log(sizes);
  return sizes.reduce((acc, curr, idx) => {
    return `${acc}${curr ? ` col-${classPrefix[idx]}${curr}` : ""}`;
  }, "");
};

const Col: React.FC<Props> = ({ children, xs, sm, md, lg, xl }: Props) => {
  const classes = getClasses(xs, sm, md, lg, xl);
  return <div className={`col${classes}`}>{children}</div>;
};

export default Col;

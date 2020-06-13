import React from "react";
import { Props, getClasses } from "./ColHelper";

const Col: React.FC<Props> = ({ children, xs, sm, md, lg, xl }: Props) => {
  const classes = getClasses(xs, sm, md, lg, xl);
  return <div className={`col${classes}`}>{children}</div>;
};

export default Col;

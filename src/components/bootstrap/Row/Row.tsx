import React from "react";
import { Props, getClasses } from "./RowHelper";

const Row: React.FC<Props> = ({ children, customClass }: Props) => {
  return <div className={getClasses(customClass)}>{children}</div>;
};

export default Row;

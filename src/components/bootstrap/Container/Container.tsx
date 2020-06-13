import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  fluid?: boolean;
  customClass?: string;
}

const getCustomClass = (customClass?: string): string =>
  customClass ? ` ${customClass}` : "";

const getFluid = (fluid?: boolean): string => (fluid ? "-fluid" : "");

const getClasses = (customClass?: string, fluid?: boolean): string =>
  `container${getFluid(fluid)}${getCustomClass(customClass)}`;

const Container: React.FC<Props> = ({
  children,
  fluid,
  customClass,
}: Props) => {
  const classes = getClasses(customClass, fluid);

  return <div className={classes}>{children}</div>;
};

export default Container;

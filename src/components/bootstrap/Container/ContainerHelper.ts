import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  fluid?: boolean;
  customClass?: string;
  data_key?: string;
  droppable?: boolean;
}

export const getCustomClass = (customClass?: string): string =>
  customClass ? ` ${customClass}` : "";

export const getFluid = (fluid?: boolean): string => (fluid ? "-fluid" : "");

export const getClasses = (customClass?: string, fluid?: boolean): string =>
  `container${getFluid(fluid)}${getCustomClass(customClass)}`;

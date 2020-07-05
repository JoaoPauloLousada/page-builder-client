import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  customClass?: string;
  data_key?: string;
  droppable?: boolean;
}

export const getClasses = (customClass?: string): string =>
  `row${customClass ? ` ${customClass}` : ""}`;

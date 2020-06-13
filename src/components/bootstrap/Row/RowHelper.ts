import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
  customClass?: string;
}

export const getClasses = (customClass?: string): string =>
  `row${customClass ? ` ${customClass}` : ""}`;

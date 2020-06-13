import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Row: React.FC<Props> = ({ children }: Props) => {
  return <div className="row">{children}</div>;
};

export default Row;

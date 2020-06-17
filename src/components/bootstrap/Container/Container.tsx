import React, { useEffect } from "react";
import { getClasses, Props } from "./ContainerHelper";

const Container: React.FC<Props> = ({
  children,
  fluid,
  customClass,
}: Props) => {
  const classes = React.useMemo(() => getClasses(customClass, fluid), [
    customClass,
    fluid,
  ]);

  return <div className={classes}>{children}</div>;
};

export default Container;

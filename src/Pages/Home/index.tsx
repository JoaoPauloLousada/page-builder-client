import React, { useMemo } from "react";
import Board from "../../components/common/Board";
import Canvas from "../../components/common/Canvas";
import BComponentsArea from "../../bootstrap-module/components/BComponentsArea";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { UIFrameworkEnum } from "../../app/enums";

function HomePage() {
  const {
    config: { UIFramework },
  } = useSelector((state: RootState) => state);

  const ComponentArea = useMemo(() => {
    if (UIFramework === UIFrameworkEnum.bootstrap) return <BComponentsArea />;
  }, [UIFramework]);

  return <Board canvas={<Canvas />} componentsArea={ComponentArea} />;
}

export default React.memo(HomePage);

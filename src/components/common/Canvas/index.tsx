import React, {
  useMemo,
  useRef,
  useEffect,
  MutableRefObject,
  useCallback,
} from "react";
import { RootState } from "../../../store/rootReducer";
import { useSelector } from "react-redux";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { useDispatch } from "react-redux";
import { createComponent } from "../../bootstrap/builder";
import IBComponentObject from "../../bootstrap/interfaces/IBComponentObject";
import { updateComponents } from "../../../store/components";
import DraggableTypes from "../../../app/Dnd/DraggableTypes.enum";
import { getFirstLevelNodes } from "../../../store/components/helper";
import { useEventListener } from "../../../utils/useEventListener";

export default function Canvas() {
  const { components } = useSelector((state: RootState) => state.components);
  const firsLevelNodes = useMemo(() => getFirstLevelNodes(components), [
    components,
  ]);
  const canvasRef: MutableRefObject<any> = useRef();

  const dispatch = useDispatch();

  const [{ isOver, ...collectedProps }, drop] = useDrop({
    accept: DraggableTypes.GRID,
    drop: (e: { type: string; component: IBComponentObject }, m) => {
      if (!m.didDrop()) {
        e.component.parentId = "CANVAS";
        dispatch(updateComponents(e.component));
      }
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  drop(canvasRef);

  const resize = () => {
    canvasRef.current.style.height =
      canvasRef.current.clientWidth / 1.7778 + "px";
  };

  const eventListener = useCallback(() => {
    resize();
  }, []);

  useEffect(() => {
    // @ts-ignore
    resize();
    // @ts-ignore
    window.addEventListener("resize", eventListener);

    return () => window.removeEventListener("resize", eventListener);
  }, [canvasRef, eventListener]);

  return (
    <div className="h-100 canvas p-3 bg-dark" id="canvas">
      <div ref={canvasRef} className="canvas-inner bg-white shadow w-100">
        {firsLevelNodes.length > 0 &&
          firsLevelNodes.map((component: IBComponentObject) =>
            createComponent(component, components)
          )}
      </div>
    </div>
  );
}

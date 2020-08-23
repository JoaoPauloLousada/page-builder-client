import React, { useCallback, useState, useEffect } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import IBComponentObject from "../../../bootstrap/interfaces/IBComponentObject";
import { useDispatch, useSelector } from "react-redux";
import {
  removeComponent,
  updateSelectedComponent,
} from "../../../../store/components";
import { getComponent } from "../../../../store/components/helper";
import { RootState } from "../../../../store/rootReducer";
interface IBranchProps {
  component: IBComponentObject;
}

const Branch = ({ component }: IBranchProps) => {
  const dispatch = useDispatch();
  const { components: componentsTree, selectedComponent } = useSelector(
    (state: RootState) => state.components
  );

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (component.id === selectedComponent) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [component, selectedComponent]);

  const remove = useCallback(() => {
    dispatch(removeComponent(component.id));
  }, [component.id, dispatch]);

  const selectComponent = useCallback(() => {
    dispatch(updateSelectedComponent(component.id));
  }, [component, dispatch]);

  return (
    <div>
      <div
        className={`d-flex justify-content-between align-items-center py-1 cursor-pointer${
          isSelected ? " branch-selected" : ""
        }`}
        onClick={selectComponent}
        data-id={component.id}
      >
        <div className="flex-grow-1">{component.name}</div>
        <button className="btn btn-outline-danger btn-sm" onClick={remove}>
          <IoIosRemoveCircleOutline />
        </button>
      </div>
      {component.children && component.children.length > 0 && (
        <div className="pl-4">
          {component.children.map((child) => (
            <Branch
              component={getComponent(componentsTree, child)}
              key={child}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Branch;

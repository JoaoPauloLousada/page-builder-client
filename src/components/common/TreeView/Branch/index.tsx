import React, { useCallback } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import IBComponentObject from "../../../bootstrap/interfaces/IBComponentObject";
import { useDispatch } from "react-redux";
import { removeComponent } from "../../../../store/components";
interface IBranchProps {
  component: IBComponentObject;
}

const Branch = ({ component }: IBranchProps) => {
  const dispatch = useDispatch();

  const remove = useCallback(() => {
    dispatch(removeComponent(component.id));
  }, [component.id, dispatch]);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center py-1">
        <div>{component.name}</div>
        <button className="btn btn-outline-danger btn-sm" onClick={remove}>
          <IoIosRemoveCircleOutline />
        </button>
      </div>
      {component.children && component.children.length > 0 && (
        <div className="pl-4">
          {component.children.map((child) => (
            <Branch component={child} key={child.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Branch;

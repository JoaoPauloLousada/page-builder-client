import React from "react";

const DraggableWrapper = (props: any) => {
  return (
    <div className="py-2 my-2 border rounded text-center text-uppercase cursor-grab">
      {props.children}
    </div>
  );
};

export default DraggableWrapper;

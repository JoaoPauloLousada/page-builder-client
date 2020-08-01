import React, { useMemo, useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { getComponent } from "../../../store/components/helper";
import { updateComponentProperty } from "../../../store/components";

export default function PropertyView() {
  const dispatch = useDispatch();
  const { components, selectedComponent } = useSelector(
    (state: RootState) => state.components
  );

  const component = useMemo(() => getComponent(components, selectedComponent), [
    components,
    selectedComponent,
  ]);

  const handlePropertyChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    const payload = {
      componentId: component.id,
      propertyName: name,
      propertyValue: value,
    };
    dispatch(updateComponentProperty(payload));
  };

  const Property = ({ property, objKey }: any) => {
    return (
      <div className="mt-3">
        <div className="text-uppercase">{property.name}:</div>

        <div className="input-group mb-3">
          <input
            name={objKey}
            type="text"
            className="form-control"
            onChange={handlePropertyChange}
            value={property.value}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      {!!component.properties &&
        Object.keys(component.properties).map((key: string) => (
          <Property
            key={key}
            property={component.properties[key]}
            objKey={key}
          />
        ))}
    </div>
  );
}

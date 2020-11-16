import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { getComponent } from "../../../store/components/helper";
import { updateComponentProperty } from "../../../store/components";

const Property = React.memo(({ property, objKey, onChange }: any) => {
  return (
    <div className="mt-3">
      <div className="text-uppercase">{property.name}:</div>

      <div className="input-group mb-3">
        <input
          name={objKey}
          type="text"
          className="form-control"
          onChange={onChange}
          value={property.value}
        />
      </div>
    </div>
  );
});

function PropertyView() {
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

  return (
    <div>
      {!!component.properties &&
        Object.keys(component.properties).map((key: string) => (
          <Property
            key={key}
            property={component.properties[key]}
            objKey={key}
            onChange={handlePropertyChange}
          />
        ))}
    </div>
  );
}

export default React.memo(PropertyView);

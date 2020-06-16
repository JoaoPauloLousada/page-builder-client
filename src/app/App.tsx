import React, { useEffect } from "react";
import "./app.scss";
import Row from "../components/bootstrap/Row/Row";
import Container from "../components/bootstrap/Container/Container";
import Col from "../components/bootstrap/Col/Col";
import { updateComponents } from '../store/components';
import { useDispatch, useSelector } from "react-redux";
import IBComponentObject from "../components/bootstrap/interfaces/IBComponentObject";
import BComponentType from "../components/bootstrap/enums/BComponentType.enum";
import { generateID } from "../utils/id";
import { createComponent } from '../components/bootstrap/builder'
import { RootState } from "../store/rootReducer";

function App() {
  const dispatch = useDispatch();

  const { components } = useSelector((state: RootState) => state.components);

  const registerComponent = (obj: IBComponentObject) => {
    dispatch(updateComponents(obj));
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={8} sm={10} md={7} lg={4} xl={1}>
            {components.length > 0 &&
            components.map((component: IBComponentObject) => createComponent(component))}
          </Col>
          <Col>
            <button onClick={() => registerComponent({id: generateID(),name: 'container',type: BComponentType.container})}>container</button>
            <button onClick={() => registerComponent({id: generateID(),name: 'row',type: BComponentType.row})}>row</button>
            <button onClick={() => registerComponent({id: generateID(),name: 'col',type: BComponentType.col})}>col</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

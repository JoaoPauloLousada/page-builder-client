import React from 'react'
import Container from '../../components/bootstrap/Container/Container'
import Row from '../../components/bootstrap/Row/Row'
import Col from '../../components/bootstrap/Col/Col'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import IBComponentObject from '../../components/bootstrap/interfaces/IBComponentObject';
import { updateComponents } from '../../store/components';
import { createComponent } from '../../components/bootstrap/builder';
import { generateID } from '../../utils/id';
import BComponentType from '../../components/bootstrap/enums/BComponentType.enum';

export default function HomePage() {
  const dispatch = useDispatch();

  const { components } = useSelector((state: RootState) => state.components);

  const registerComponent = (obj: IBComponentObject) => {
    dispatch(updateComponents(obj));
  }
  return (
    <Container>
      <Row>
        <Col xs={8}>
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
  )
}

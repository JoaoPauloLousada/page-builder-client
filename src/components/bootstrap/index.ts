import BComponentType from "./enums/BComponentType.enum";
import Container from "./Container/Container";
import Row from "./Row/Row";
import Col from "./Col/Col";

const BComponents = {
  [BComponentType.container]: Container,
  [BComponentType.row]: Row,
  [BComponentType.col]: Col,
}

export default BComponents

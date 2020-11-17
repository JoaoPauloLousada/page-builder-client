import Container from "./Container/Container";
import Row from "./Row/Row";
import Col from "./Col/Col";
import Typography from "../../components/Typography";
import BComponentType from "../enums/BComponentType.enum";

const BComponents = {
  [BComponentType.container]: Container,
  [BComponentType.row]: Row,
  [BComponentType.col]: Col,
  [BComponentType.typography]: Typography,
};

export default BComponents;

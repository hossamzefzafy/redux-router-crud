import { useRouteError, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button} from "react-bootstrap";

 function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);
 

  return (
    <Container className="mt5 text-center">
    <Row>
      <Col xs={{ span: 9, offset:1 }}>
      <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button variant="link" onClick={()=>navigate('/', {replace:true})}>Go Home</Button>
    </div>
      </Col>
    </Row>
  </Container>
   
  );
}

export default ErrorPage
import './App.css';
import Buttons from './Buttons';
import Timer from "./Timer";
import {Container, Row, Col} from "reactstrap";


function App() {


  const time = new Date();
  time.setSeconds(time.getSeconds() + 120); 



  return (
    <div className="App">
      <Container>
      <Row>
      <Col sm="8">
      <h1 className="app-h1">Maze Game</h1>
        </Col>
       </Row>
       <Container>
         <Row>
           <Col sm="8">
           <Buttons/>
           </Col>
           <Col sm="4">
           <Timer  expiryTimestamp={time}/>
           </Col>
        </Row>
       </Container>
      </Container>
    </div>
  );
}

export default App;

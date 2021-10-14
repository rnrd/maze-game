import React from 'react';
import { useState , useEffect } from 'react';
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import {getRightClickData,getLeftClickData, getTopClickData, getBottomClickData, addDataToArrayA, addDataToArrayB} from "./redux/actions/Actions";
import {Button, Container, Row, Col} from "reactstrap";
import Maze from './Maze';
import "./css/Button.css";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

export default function Buttons() {

  const a = useSelector((state) => state.iteratorReducer.a, shallowEqual);
  const b = useSelector((state) => state.iteratorReducer.b, shallowEqual);
  const checkList=useSelector((state) => state.iteratorReducer.checkList, shallowEqual);

  const alertDelay = (ms) => new Promise((res) => setTimeout(res, ms));
  const checkGame=async ()=>{
    if(checkList[0] && checkList[1] && checkList[2] && checkList[3]){
      alertify.error("Game is over!");
      await alertDelay(2000);
      window.location.reload();
    }
  }

  const refreshPage=async ()=>{
    await alertDelay(200);
    window.location.reload();
  }


  const [buttonState, setButtonState] = useState(false);
  const buttonClick = () => {
    if (!buttonState) {
      setButtonState(true);
    } else {
      setButtonState(false);
    }
  };

  const arrayADispatch = useDispatch();
  const pushDataToArrayA = (data) => {
    arrayADispatch(addDataToArrayA(data));
  };

  const arrayBDispatch = useDispatch();
  const pushDataToArrayB = (data) => {
    arrayBDispatch(addDataToArrayB(data));
  };
  const rightClickDispatch = useDispatch();
  const iterateRight = () => {
    rightClickDispatch(getRightClickData());
  };

  const leftClickDispatch = useDispatch();
  const iterateLeft = () => {
    leftClickDispatch(getLeftClickData());
  };

  const topClickDispatch = useDispatch();
  const iterateTop = () => {
    topClickDispatch(getTopClickData());
  };

  const bottomClickDispatch = useDispatch();
  const iterateBottom = () => {
    bottomClickDispatch(getBottomClickData());
  };

  useEffect(() => {
    console.log("use effect");
    pushDataToArrayA(a);
    pushDataToArrayB(b);
    checkGame()
    console.log(checkList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonState]);

    return (
      <div>
        <Container className="maze-container">
            <Row>
              <Row>
              <Col >
              <Button color="success" sm="lg" block className="button" onClick={(e) => {
                iterateTop();
                buttonClick();
                }}>
                Move Up
              </Button>
              </Col>
              </Row>
              <Row>
              <Col>
              <Button color="success" sm="lg" block className="button" onClick={(e) => {
                iterateLeft();
                buttonClick();
                }}>
                Move Left
              </Button>
            </Col>
            <Col >
              <Button color="success" sm="lg"  className="button" onClick={(e) => {
                iterateRight();
                buttonClick();
                }}>
                Move Right
              </Button>
            </Col>
              </Row>
              <Row>
              <Col >
              <Button color="success" sm="lg" block className="button" onClick={(e) => {
                iterateBottom();
                buttonClick();
                }}>
                Move Down
              </Button>
              </Col>
              </Row>
          </Row>
        </Container>
        <Container>
            <Maze/>
            <Row>
              <Col sm="3" className="offset-5">
              <Button color="warning" sm="lg"  className="button" block onClick={(e) => {
                refreshPage()
                }}>
                Refresh
              </Button>
              </Col>
              </Row>
        </Container>
      </div>
    );
}

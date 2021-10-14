import React from 'react';
import { useTimer } from 'react-timer-hook';
import {useEffect } from 'react';
import "./css/Timer.css";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function Timer({ expiryTimestamp }) {


  const alertDelay = (ms) => new Promise((res) => setTimeout(res, ms));

  const {
    seconds,
    minutes
  } = useTimer({ expiryTimestamp, onExpire: async () => {
    alertify.error("Game is over.!");
    await alertDelay(2000);
    window.location.reload();
  } });


  useEffect(() => {
    
    console.log("Timer useeffect");
    alertify.success("Start !");

  },[])

  return (
    <div className="Timer-main-div">
        <h1>Timer</h1>
        <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
        </div>
    </div>
  );
}

export default Timer;
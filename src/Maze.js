import React from 'react';
import Sketch from "react-p5";
import { useEffect } from 'react';
import {useSelector, shallowEqual} from "react-redux";
import {Container} from "reactstrap";
import "./css/Maze.css";


function Maze() {

    var width=800;
    var height=400;
    var cellWidth = 20;
    const a=useSelector(state=>state.iteratorReducer.a,shallowEqual);
    const b=useSelector(state=>state.iteratorReducer.b,shallowEqual);



    const iteratorRight=useSelector(state=>state.iteratorReducer.Iterators.iteratorRight,shallowEqual);
    const iteratorLeft=useSelector(state=>state.iteratorReducer.Iterators.iteratorLeft,shallowEqual);
    const iteratorTop=useSelector(state=>state.iteratorReducer.Iterators.iteratorTop,shallowEqual);
    const iteratorBottom=useSelector(state=>state.iteratorReducer.Iterators.iteratorBottom,shallowEqual);
    

    const pastArray=useSelector(state=>state.iteratorReducer.pastArray,shallowEqual);

    const setup = (p5, canvasParentRef) => {
		p5.createCanvas(width, height).parent(canvasParentRef);
        
	};



    const draw =(p5) => {
     
		p5.background(255);
        
        for(let j=0; j<=height;j++){
            let y=j*cellWidth
            p5.stroke(20, 50, 250);
            p5.line(0,y,width,y)
        }
        for(let i=0; i<=width;i++){
            let x=i*cellWidth
            p5.stroke(20, 50, 250);
            p5.line(x,0,x,height)
        }

        
        p5.fill(100, 20, 120);
		p5.rect(a, b, cellWidth, cellWidth);   
        
        for(let n=0; n<pastArray.length;n++){
           
            p5.fill(100, 20, 120);
		    p5.rect(pastArray[n][0], pastArray[n][1], cellWidth, cellWidth); 
        }

        
	};


    useEffect(() => {
        console.log("use effect Maze")
        
    }, [iteratorRight,iteratorLeft,iteratorTop,iteratorBottom])
   

    return (
        <div>
            <Container className="Maze-container">
                <Sketch setup={setup} draw={draw}/>
            </Container>
        </div>
    )
}


export default Maze;

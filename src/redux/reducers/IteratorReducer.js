import {initialState} from "./initialState";
import * as actionTypes from "../actions/ActionTypes";

const iteratorReducer=(state=initialState,action)=>{
    var newState=state;
    var cellWidth=20;
    var width=800;
    var height=400;
    var checkList=newState.checkList;
    switch(action.type){
        case actionTypes.LEFTCLICK:

            newState.pastArray.push([newState.a,newState.b]);
            let left_a=newState.a-cellWidth;
            let left_b=newState.b
            if(left_a<0 || left_b<0 || left_a>=width || left_b >= height){
                return newState;
            }
            var newLeftArray=[[left_a,left_b]];
            let LeftArray=newState.pastArray;
            let leftCheck=false;

            for(let i=0; i<LeftArray.length;i++){
                if(newLeftArray[0][0]===LeftArray[i][0] && newLeftArray[0][1]===LeftArray[i][1]){
                    
                    leftCheck=true;
                    checkList[0]=true;
                    
                }
            }
            if(leftCheck){
                return newState;
            }
            else{
                checkList[0]=false;
                newState.a=left_a;
                newState.b=left_b;
                newState.Iterators.iteratorLeft+=action.payload;
                return newState;
            }

            case actionTypes.RIGHTCLICK:
            
            newState.pastArray.push([newState.a,newState.b]);
            let rigth_a=newState.a+cellWidth;
            let right_b=newState.b;

            if(rigth_a<0 || right_b<0 || rigth_a>=width || right_b >= height){
                return newState;
            }

            let newRightArray=[[rigth_a,right_b]];
            let rightArray=newState.pastArray;
            let rightCheck=false;

            for(let i=0; i<rightArray.length;i++){
                if(newRightArray[0][0]===rightArray[i][0] && newRightArray[0][1]===rightArray[i][1]){
                    rightCheck=true;
                    checkList[1]=true;
                    
                }
            }
            if(rightCheck){
                
                return newState;
            }
            else{
                checkList[1]=false;
                newState.a=rigth_a;
                newState.b=right_b;
                newState.Iterators.iteratorRight+=action.payload;
                return newState;
            }

            case actionTypes.TOPCLICK:
            
                newState.pastArray.push([newState.a,newState.b]);
                let top_a=newState.a;
                let top_b=newState.b-cellWidth;

                if(top_a<0 || top_b<0 || top_a>=width || top_b >= height){
                    return newState;
                }
                
                let newTopArray=[[top_a,top_b]];
                let topArray=newState.pastArray
                let topCheck=false;
    
                for(let i=0; i<topArray.length;i++){
                    if(newTopArray[0][0]===topArray[i][0] && newTopArray[0][1]===topArray[i][1]){
                        
                        topCheck=true;
                        checkList[2]=true;
                    }
                }
                if(topCheck){
                   
                    return newState;
                }
                else{
                    checkList[2]=false;
                    newState.a=top_a;
                    newState.b=top_b;
                    newState.Iterators.iteratorTop+=action.payload;
                    return newState;
                }

                case actionTypes.BOTTOMCLICK:
            
                newState.pastArray.push([newState.a,newState.b]);
                let bottom_a=newState.a;
                let bottom_b=newState.b+cellWidth;

                if(bottom_a<0 || bottom_b<0 || bottom_a>=width || bottom_b >= height){
                    return newState;
                }

                let newBottomArray=[[bottom_a,bottom_b]];
                let bottomArray=newState.pastArray;
                let bottomCheck=false;
    
                for(let i=0; i<bottomArray.length;i++){
                    if(newBottomArray[0][0]===bottomArray[i][0] && newBottomArray[0][1]===bottomArray[i][1]){
                        
                        bottomCheck=true;
                        checkList[3]=true;
                        
                    }
                }
                if(bottomCheck){
                    return newState;
                }
                else{
                    checkList[3]=false;
                    newState.a=bottom_a;
                    newState.b=bottom_b;
                    newState.Iterators.iteratorBottom+=action.payload;
                    return newState;
                }

        default:
            return newState;
    }
    
}


export default iteratorReducer;
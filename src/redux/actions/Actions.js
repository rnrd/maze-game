import * as actionTypes from "./ActionTypes";

export const getRightClickData=()=>{
    return {
        type:actionTypes.RIGHTCLICK,
        payload:1
    }
}

export const getLeftClickData=()=>{
    return {
        type:actionTypes.LEFTCLICK,
        payload:1
    }
}

export const getTopClickData=()=>{
    return {
        type:actionTypes.TOPCLICK,
        payload:1
    }
}

export const getBottomClickData=()=>{
    return {
        type:actionTypes.BOTTOMCLICK,
        payload:1
    }
}

export const addDataToArrayA=(data)=>{
    return {
        type:actionTypes.ADDDATATOARRAYA,
        payload:data
    }
}

export const addDataToArrayB=(data)=>{
    return {
        type:actionTypes.ADDDATATOARRAYB,
        payload:data
    }
}


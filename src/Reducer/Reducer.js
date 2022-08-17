import React,{useEffect,useState,useReducer} from 'react';
import {INCREAMENT_COUNT,DECREAMENT_COUNT,RESET_COUNT} from "./action.type"

/*
export default function Reducer(count,action){
switch(action.type){
case INCREAMENT_COUNT:
    return count+action.payload;
case DECREAMENT_COUNT:
    return count-action.payload;
default:
    return 0;
}
}
*/

export default function Reducer(state,action){
switch(action.type){
case INCREAMENT_COUNT:
    return state.count+action.payload;
case DECREAMENT_COUNT:
    return state.count-action.payload;
case  RESET_COUNT:
    return 0
default:
    return state;
}
}




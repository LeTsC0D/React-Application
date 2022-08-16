import React,{useEffect,useState,useReducer} from 'react';
import {INCREAMENT_COUNT,DECREAMENT_COUNT,RESET_COUNT} from "./action.type"

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


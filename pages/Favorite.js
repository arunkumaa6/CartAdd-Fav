import React,{useContext} from 'react'
import { statecontext } from '../statecontext/Context';

export default function Favorite() {
    const {state}=useContext(statecontext);
    console.log("state",state);


  return (
    <div>
        {state?.Favorite?.map((fav,id)=>
      <div key={id}>
        <img src={fav.image} width="80px" hight="80px" ></img>
        <h2>{fav.name}</h2>
        </div>,)}
    </div>
  )
}

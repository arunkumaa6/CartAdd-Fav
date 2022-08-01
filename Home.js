import React from 'react'
import products from '../products.json';
import { useContext } from 'react';
import { statecontext } from '../statecontext/Context';


export default function Home() {
  const {state,dispatch}=useContext(statecontext);
  // console.log("state",state);


const addTocart=(prod)=>{
  let temp=[];
  if(state?.cartItem?.length){
    temp=[...state.cartItem, prod]
  }
  else{
    temp=[prod];
    console.log("temp",temp);
  }

  const newArr=temp.filter((val,id,array)=>array.indexOf(val)==id);

  dispatch({
    type:"update",
    payload: {cartItem: newArr}
  });
  
}

const favorite=(prod)=>{
  let fav=[]
  if(state?.Favorite?.length){
    fav=[...state.Favorite,prod]
  }
  else{
    fav=[prod];
  }
  const favArr=fav.filter((val,id,array)=>array.indexOf(val)==id);
  
  dispatch({
    type:"favorite",
    payload: {Favorite: favArr}
  });

  if(state.Favorite.id==favArr){
    
  }
}

  return (
    <div>
      {products.map((prod,id)=>
      < div key={id}>
        <img src={prod.image} width="80px" hight="80px"></img>
        <h2>{prod.name}</h2>
        <button onClick={()=> addTocart(prod)}>Add</button>
        <button onClick={()=> favorite(prod)}>Fav</button>
        </div>)}
    </div>
  )
}


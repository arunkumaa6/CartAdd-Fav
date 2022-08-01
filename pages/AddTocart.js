import React,{useContext} from 'react'
import { statecontext } from '../statecontext/Context';

 const AddTocart= ()=> {
    const {state,dispatch}=useContext(statecontext);
    // console.log(state);

    let increase=(item)=>{
      let incNum=item.qty+=1
      dispatch({
        type:"increase",
        payload: incNum
      });
    }

    let remove=(item)=>{

       let remItem=state.cartItem.filter((data)=>data.id !==item.id);
      dispatch({
        type:"remove",
        payload: remItem
      });
    }

    let decrease=(item)=>{
      if(item.qty==0){
        remove(item);
      }
      else{
        let decNum=item.qty--
        dispatch({
          type:"decrease",
          payload: decNum
        });
      }

    }

  return (
    <div>
        {state?.cartItem?.map((prod,id)=>
      <div key={id}>
        <img src={prod.image} width="80px" hight="80px"></img>
        <h2>{prod.name}</h2>
        <h3>{prod.qty}</h3>
        <button onClick={()=>decrease(prod)}>-</button>
        <button onClick={()=>increase(prod)}>+</button>
        <button onClick={()=>remove(prod)}>Remove</button>
        </div>)}
    </div>
  )
}
export default AddTocart
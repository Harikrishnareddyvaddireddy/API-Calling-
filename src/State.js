import React, { useState,useRef, useEffect } from "react";
import './State.css'
export default function State() {
    let x = useRef()
    const [num,setNum] = useState(0)
 function increment(event){
    event.stopPropagation()
    setNum(num+1)
    x.current.classList.toggle('active');
    x.current.classList.toggle('inactive');    

 }
 function Decrement () {
    if (num > 0) {
      setNum(num - 1);
      x.current.classList.toggle('active');
      x.current.classList.toggle('inactive');      
    }
    else{
        alert("Below zero we cant decrement")
    }
}
// console.log(x.current)
useEffect(()=>{console.log(num)},[num])
  return (
    <>
    <button onClick={increment}>+</button>
    <p ref={x} className="active">{num}</p>
    <button onClick={Decrement}>-</button>
    </>
  )
}

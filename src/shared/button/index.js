import React from 'react'
import "./style.css";

const Button = ({onSubmit}) => {
    const submit= (e)=>{
        console.log("submit");
        e.preventDefault();
      }
    return (
        <>
            <button className="FW(500) LH(20) MT(40) FS(18) C(W) C(p) BR(4) BC(blue)" onSubmit={submit}>Submit</button>
        </>
    )
}
export default Button;


import React, {useState, useEffect, useCallback} from 'react'
import "./style.css";
import useForm from "../halper";

const InputField = ({type, errorMessage, title, name}) => {
  console.log({type, errorMessage, title, name});
  const{ handleInput, values} = useForm()
    
    return (
        <>
          {/* <form> */}
            {/* {
              inputValue.map(({id, name, title, errorM, type}, i) => {
                return ( */}
                    <div className="group">
                      <span>{title}</span>
                      <input type={type} name={name} id={name} autoComplete="off" onChange={(e)=> handleInput(e)}/>
                      <label htmlFor={name}>{errorMessage}</label>
                    </div> 
                {/* )
              })
            } */}
            {/* </form> */}
        </>
    )
}
export default InputField;


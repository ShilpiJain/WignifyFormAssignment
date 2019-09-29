import React from 'react'
import "./style.css";

const InputField = ({type, title, name}) => {

  const handleChange = e => {
    console.log("handleChange");
  }
  // const validate =(e)=>{
  //   console.log("validate");
  // }
  const blurHandle = () =>{
    console.log("blurHandle");
  }
  const focusHandle = () =>{
    console.log("focusHandle");
  }
    return (
        <>
          {/* <form> */}
            {/* 
              inputValue.map(({id, name, title, errorM, type}, i) => { { {`${!sethasError ? "error" : " "}`}
                return ( */}
                    <div className="group MT(5) MR(0) MB(27) ML(0)">
                      <span className="FS(16) LH(20) PB(5) D(IB)">{title}</span>
                      <input className="W(100) FS(14) PLR(10) BSZ(BB) B(2Gr) error" type={type} name={name} id={name} autoComplete="off"
                       onChange={handleChange} onBlur={blurHandle} onFocus={focusHandle}/>
                      <label htmlFor={name} title={name}>f</label>
                    </div> 
                {/* )
              })
            } */}
            {/* </form> */}
        </>
    )
}
export default InputField;


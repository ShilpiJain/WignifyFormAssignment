import React, {useState} from 'react'
import "./style.css";

const InputField = ({errorMessage, name, required, title, type}) => {
  // console.log({type, title, name, onChange})
  console.log({errorMessage, name, required, title, type})

  const [isTouched, setTouched] = useState(false);
  const [inputValue, setValue] = useState("");
  const [isValid, setValid] = useState(true); // default validation no needed
  // const [optiaonal, setOptional] = useState(true); // default validation no needed
  const [error, setError] = useState(false); // default validation no needed

  const handleChange = e => {
    debugger;
    console.log(inputValue);
    setValue(e.target.value);
    let val = e.target.value;
    let name = e.target.name;
    let valLength = e.target.value.split("");
    if(name === "email" && val != "" && emailIsValid(val)){
      setError(true);
      setValid(true);
    }else{
      setError(false);
      setValid(false);
    }
    if( name === "password" && val !== "" && valLength.length >= 8){
      setError(true); // validated 
      setValid(true); // validated 
    }else{
      setError(false); // not validated
      setValid(false); // not validated
    }
    setTouched(true);
  }

  const emailIsValid = email => {
    debugger;
    return /\S+@\S+/.test(email);
  }
  const onBlur= () => {
    setTouched(true);
  }

  const onFocus= () => {
    setTouched(true);
  }

  console.log("required :- " + required , "error :- " + error, "!isValid :- "+isValid, "isTouched :-" + isTouched);
    return (
        <>
          {/* <form> */}
            {/* 
              inputValue.map(({id, name, title, errorM, type}, i) => { { {`${required && isTouched && !inputValue ? "error" : " "}`}
                return (
                   {"form-control user-mobile" + (((showError.phone && hasFocused.phone) || (isFocused.phone && showError.phone && loginDetails.phone.length === 10)) ? " error-border" : "")}*/   }
                    <div className="group MT(5) MR(0) MB(27) ML(0)">
                      <span className="FS(16) LH(20) PB(5) D(IB)">{title}</span>
                      <input className={"W(100) FS(14) PLR(10) BSZ(BB) B(2Gr)" + (((required && error) || isTouched) && !isValid ? " error" : "")} type={type} name={name} id={name} autoComplete="off"
                       onChange={handleChange} onBlur={onBlur}  onFocus={onFocus}  value={inputValue}/>
                      <label htmlFor={name} title={name} className="error-message BR(3)">{errorMessage}</label>
                    </div> 
                {/* )
              })
            } */}
            {/* </form> */}
        </>
    )
}
export default InputField;


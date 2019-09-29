import React, {useState} from 'react'
import "./style.css";

const InputField = ({errorMessage, name, required, title, type}) => {
  // console.log({type, title, name, onChange})
  console.log({errorMessage, name, required, title, type})

  const [isTouched, setTouched] = useState(false);
  const [inputValue, setValue] = useState("");
  const [isValid, setValid] = useState(true);

  const handleChange = e => {
    console.log(inputValue);
    debugger;
    // console.log(setHasBlur(true));
    // console.log(setHasFocus(true));
    // console.log(setHasErrors(true));
    setValue(e.target.value);
    let val = e.target.value;
    let name = e.target.name;
    if(name === "email" && val != "" && emailIsValid(val)){
      setValid(true);
    }else{
      setValid(false);
    }
    if( name === "password" && val > 6){
      setValid(true);
    }else{
      setValid(false);
    }
  }

  const emailIsValid = (email)=> {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
 
    return (
        <>
          {/* <form> */}
            {/* 
              inputValue.map(({id, name, title, errorM, type}, i) => { { {`${required && isTouched && !inputValue ? "error" : " "}`}
                return ( */}
                    <div className="group MT(5) MR(0) MB(27) ML(0)">
                      <span className="FS(16) LH(20) PB(5) D(IB)">{title}</span>
                      <input className={`W(100) FS(14) PLR(10) BSZ(BB) B(2Gr)${required && isTouched && !inputValue && !isValid ? "error" : ""}`} type={type} name={name} id={name} autoComplete="off"
                       onChange={handleChange} onBlur={() => setTouched(true)} value={inputValue}/>
                      <label htmlFor={name} title={name} className="error-message BR(3)">Please enter validate input</label>
                    </div> 
                {/* )
              })
            } */}
            {/* </form> */}
        </>
    )
}
export default InputField;


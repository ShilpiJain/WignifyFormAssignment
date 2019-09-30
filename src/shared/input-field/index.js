import React, {useState} from 'react'
import "./style.css";

const InputField = ({errorMessage, name, required, title, type, isSubmit, setvalue, value}) => {
  const [isTouched, setTouched] = useState(false);
  const [isValid, setValid] = useState(false); 
  console.log("is"+ setvalue)

  const handleChange = e => {
    debugger;
    let val = e.target.value;
    let name = e.target.name;
    let valLength = e.target.value.split("");
    setvalue({
      ...value,
      [name]: val
    })
    switch(name) {
      case "email":
        if(name === "email" && val != "" && emailIsValid(val)){
          setValid(true);
          setTouched(false);
        } else{
          setValid(false);
          setTouched(true);
        }
      break;
      case "name":
        if(name === "name"){
          setValid(false);  
        }
      break;
      case "password":
        if( name === "password" && passwordIsValid(val) && val !== "" && valLength.length >= 8){
          setValid(true); 
          setTouched(false);
        }else{
          setValid(false); 
          setTouched(true);
        }
      break;
      default:
        // code block
    }
  }

  const emailIsValid = email => {
    debugger;
    return /\S+@\S+/.test(email);
  }
  const passwordIsValid = password =>{
    return /^[0-9]*$/.test(password);
  }

  const onFocus= (e) => {
    setTouched(true);
    if(isValid == true ){
      setTouched(false);
    }else {
      setTouched(true);
    }
  }

  console.log(" required:-" + required ," isValid:-"+ isValid, " isTouched:-" + isTouched, "isSubmit :-" + !isSubmit  );
  console.log(value);
    return (
        <>
          {/* <form> */}
            {/* 
              inputValue.map(({id, name, title, errorM, type}, i) => { { {`${required && isTouched && !inputValue ? "error" : " "}`}
                return (
                   {"form-control user-mobile" + (((showError.phone && hasFocused.phone) || (isFocused.phone && showError.phone && loginDetails.phone.length === 10)) ? " error-border" : "")}*/   }
                    <div className="group MT(5) MR(0) MB(27) ML(0)">
                      <span className="FS(16) LH(20) PB(5) D(IB)">{title}</span>
                      <input className={"W(100) FS(14) PLR(10) BSZ(BB) B(2Gr)" + ((required || isValid) && (isTouched || !isSubmit) ? " error" : "")} type={type} name={name} id={name} autoComplete="off"
                       onChange={handleChange}  onFocus={onFocus}/>
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


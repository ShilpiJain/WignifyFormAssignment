import React, {useState, useEffect} from 'react'
import "./style.css";
// import useForm from "../halper";

const InputField = ({type, title, name}) => {
  let errors = {};
  const[ values, setValues ] = useState({email : "", Password : ""})
  const[ error, setError ] = useState({message : ""})
  const[ hasError, sethasError ] = useState(false)

 
  const handleChange = e => {
    debugger;
    const {name, value} = e.target;
    switch(name){
      case 'email':
        if(!value){
          sethasError(true);
        } else if(!/\S+@\S+\.\S+/.test(value)){
          sethasError(true);
        } 
      case 'password':
        if(!value){
          sethasError(true);
        } else if(value.length < 6){
          sethasError(true);
        }
    }
    setError({
      ...error,
      message : "password is invalid"
    });

    setValues({
      ...values, 
      [name]: value
    });
  }
  const validate=(e)=>{
    
  }
  const blurHandle = () =>{

  }
  const focusHandle = () =>{

  }
    return (
        <>
          {/* <form> */}
            {/* {
              inputValue.map(({id, name, title, errorM, type}, i) => { { {`${!sethasError ? "error" : " "}`}
                return ( */}
                    <div className="group">
                      <span>{title}</span>
                      <input type={type} name={name} id={name}  autoComplete="off"
                       onChange={handleChange} onBlur={blurHandle} onFocus={focusHandle}/>
                      <label htmlFor={name} aria-labelledby={name}>{errors.message}</label>
                    </div> 
                {/* )
              })
            } */}
            {/* </form> */}
        </>
    )
}
export default InputField;


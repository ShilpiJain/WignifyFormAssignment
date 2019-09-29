import React, {useState} from 'react'

const useForm = () =>{
    const  [values, setValues] = useState({email: "",password:""});  
    const  [errors, setErrors] = useState({email: "",password : ""}); 
    
    const handleInput = e => {
        debugger;
        const {name, value} = e.target;
        console.log(e);
        setValues({
          ...values,
          [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateLogin(values))
        Submit();
    }
    const Submit = () => {
        console.log("submit done")
    }
    const validateLogin = values =>{
        debugger;
        let errors = {};
        if(!values.email){
            errors.email = "Please enter email";
        } else if (!/\S+@\S+\.\S+/.test(values.email)){
            errors.email = "Email is invalid";
        }
        if(!values.password){
            errors.password = "Please enter password";
        } else if (values.password.length < 6){
            errors.password = "Email is password";
        } 
        return errors;
    }
    return{
        handleInput,
        handleSubmit,
        values,
        Submit,
        validateLogin,
        errors
    }
}

export default useForm;
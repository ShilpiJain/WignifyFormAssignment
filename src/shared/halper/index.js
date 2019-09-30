import React, {
    useState
} from 'react'

const useForm = () => {
    const [isTouched, setTouched] = useState(false);
    const [inputValue, setValue] = useState("");
    const [isValid, setValid] = useState(true);
    const [isSubmit, setIsSubmit] = useState(false)
    const [isRequired, setIsRequired] = useState(false)
    const [value, setvalue] = useState({
        email: "",
        name: "",
        password: ""
    })

    const handleChange = e => {
        debugger;
        console.log(inputValue);
        setValue(e.target.value);
        let val = e.target.value;
        let name = e.target.name;
        let valLength = e.target.value.split("");
        if (name === "email" && val != "" && emailIsValid(val)) {
            setValid(true);
            setTouched(false);
        } else {
            setValid(false);
            setTouched(true);
        }
        if (name === "name") {
            setValid(false);
        }
        if (name === "password" && val == Number && val !== "" && valLength.length >= 8) {
            setValid(true);
            setTouched(false);
        } else {
            setValid(false); 
            setTouched(true);
        }
    }

    const emailIsValid = email => {
        debugger;
        return /\S+@\S+/.test(email);
    }

    const onFocus = (e) => {
        handleChange(e);
        console.log("onFocus")
        setTouched(true);
        if (name === "name") {
            setValid(true);
            setTouched(false);
        }
        if (isValid == true) {
            setTouched(false);
            console.log(isTouched);
        } else {
            setTouched(true);
        }
    }

    const handleSubmit = (e) => {
        debugger;
        e.preventDefault();
        let email = value.email;
        let name = value.name;
        let password = value.password;
        if (email == "", password == "") {
            setIsSubmit(false);
            setIsRequired(true);
        } else {
            setIsSubmit(true);
            setIsRequired(false);
        }
        console.log("f" + isSubmit)
    }
    // const  [values, setValues] = useState({email: "",password:""});  
    // const  [errors, setErrors] = useState({email: "",password : ""}); 

    // const handleInput = e => {
    //     debugger;
    //     const {name, value} = e.target;
    //     console.log(e);
    //     setValues({
    //       ...values,
    //       [name]: value
    //     })
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setErrors(validateLogin(values))
    //     Submit();
    // }
    // const Submit = () => {
    //     console.log("submit done")
    // }
    // const validateLogin = values =>{
    //     debugger;
    //     let errors = {};
    //     if(!values.email){
    //         errors.email = "Please enter email";
    //     } else if (!/\S+@\S+\.\S+/.test(values.email)){
    //         errors.email = "Email is invalid";
    //     }
    //     if(!values.password){
    //         errors.password = "Please enter password";
    //     } else if (values.password.length < 6){
    //         errors.password = "Email is password";
    //     } 
    //     return errors;
    // }
    return {
        handleChange,
        onFocus,
        handleSubmit,
        setTouched,
        setValue,
        setIsSubmit,
        setIsRequired
    }
}

export default useForm;
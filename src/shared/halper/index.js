import React, {useState} from 'react'
import { callback } from './util';

const useForm = callback =>{
    let values = {
        email: "",
        password:""
    }
    const  [value, setValues] = useState(values);  
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
        callback();
    }
    return{
        handleInput,
        handleSubmit,
        values
    }
}

export default useForm;
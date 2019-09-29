import React, {useState} from 'react';
import './App.css';
import Checkbox from "../shared/checkbox";
import Button from "../shared/button";
import InputField from "../shared/input-field";
import useForm from "../shared/halper";

const App = () => {
  // const{handleInput, handleSubmit, value, Submit, validateLogin, errors} = useForm()
  const handleSubmit= ()=>{
    console.log("c");
  }
  
  return (
  <section className="wrapper W(100) M(a)">
      <div className="popup W(100) BC(W)">
        <div className="block">
          <div className="color">
              <div className="container">
                <h1>Welcome back!</h1>
                <p>VWO makes for a really powerful platform that takes care of all our conversion optimization requirements.</p>
              </div>
          </div>
        </div>
        <div className="container dektop-form">
          <div className="form">
            <h1>Create an account</h1>
            <form onSubmit={handleSubmit} noValidate>
              <InputField 
                type="text" 
                name="email" 
                title="Enter your email" 
                errorMessage="Please add valid email address" 
                />
              <InputField 
                type="text" 
                name="name" 
                title="Enter your full name (Optional)"
                errorMessage=" "
                />
              <InputField 
                  type="password" 
                  name="password"  
                  title="Choose a strong password" 
                  errorMessage="Password must have a numeric value"
                 />
              <Checkbox/>
              <Button/>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;


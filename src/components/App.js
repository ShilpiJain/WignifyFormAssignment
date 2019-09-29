import React, {useState} from 'react';
import './App.css';
import InputField from "../shared/input-field";
import Checkbox from "../shared/checkbox";
import Button from "../shared/button";

const App = () => {

  const handleSubmit= () => {
    console.log("Handle Submit");
  }
  
  return (
  <section className="wrapper W(100) M(a) P(r)--ld H(100vh)--ld">
      <div className="popup W(100) H(100) BC(W) T(0)--md L(0)--md M(0)--md H(100vh)--md W(100vw)--md P(a)--ld BR(5)--ld">
        <div className="block BS(C) H(100) BR(N) BP(C) MB(40) MW(50vw)--md">
          <div className="color W(100) H(100) MH(270) BC(purple)">
              <div className="Con">
                <h1 className="FW(B) FS(34) LH(40) C(W) PT(40) PR(0) PB(20) PL(0) MT(0) MR(12) MB(15) ML(12)">Welcome back!</h1>
                <p className="FW(500) FS(16) C(W) LH(20) MT(0) MR(12) MB(15) ML(12)">VWO makes for a really powerful platform that takes care of all our conversion optimization requirements.</p>
              </div>
          </div>
        </div>
        <div className="Con dektop-form">
          <div className="form PT(0) PB(0) PL(0) PL(10)--md PR(10)--md PL(20)--sm PR(20)--sm">
            <h1 className="FW(B FS(24) LH(28) MB(30)">Create an account</h1>
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


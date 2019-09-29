import React from 'react';
import "./style.css"

const Checkbox = () => {  
  const changeHangle =(e) => {
    console.log(e.target.value)
  }
    return (
        <>
          <div className="group">
            <span>Are you an agency or individual? <label></label></span>
              {
                checkboxValue.map((checkbox, i)=>{
                  return (
                    <label className="box" key={i}>
                      <input type="radio" name="agency" onChange={(e)=> changeHangle(e)}/>
                      <span className="radio"></span>{checkbox.value}
                    </label>
                    )
                })
              }
          </div>  
        </>
    )
}
export default Checkbox;


const checkboxValue = [
  {
    id : 1,
    value : "Individual"
  },
  {
    id : 2,
    value : "Agency"
  }
]
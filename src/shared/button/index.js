import React from 'react'

const Button = () => {
    const submit= (e)=>{
        e.preventDefault();
      }
    return (
        <>
            <button onSubmit={submit}>Submit</button>
        </>
    )
}
export default Button;


import React, { useState } from 'react'

export default function InputField() {

    let[changedText,setChangedState] = useState("");

    const changeText = (event)=>{

        let text = event.target.value;
        let newText = changedText+" "+text;
        setChangedState(newText);


    }

  return (
    <div>
        <h1>Hello {changedText}</h1>
      <input onChange={changeText} placeholder='Enter text' type='text'/>

    </div>
  )
}

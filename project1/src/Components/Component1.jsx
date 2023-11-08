import React, { useState } from "react";



function Component1(){

    //declaring variables
let [counter,setCounter] = useState(0);

const updateCounter = ()=>{
    
        counter++;
        setCounter(counter);
        console.log("Counter updated !!");
}


    return (
        <>

        <h3 onClick={updateCounter}>{`counter`}</h3>
        <h4>{counter}</h4>
        </>
    )
}

export default Component1;
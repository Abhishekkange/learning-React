import React, { useState } from 'react';

function EventsInReact(){

    let [name,setname] = useState("click Me");
    let [bg,setbg] = useState('#ffff')

    const changeBg = ()=>{

        setbg("Red");


    }
    const normalbg = ()=>{

        setbg('#ffff');





    }

    return(

        <>
        <div style={{backgroundColor:bg}}>
        <button onDoubleClick={normalbg}  onClick={changeBg}>{name}</button>
        </div>
        
        
        </>




    )





}

export default EventsInReact;
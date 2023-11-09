//import required React Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './Components/Heading'
import Component1 from './Components/Component1';
import EventsInReact from './Components/EventsInReact';
import InputField from './Components/InputField';

const Abhishek = "Abhishek Kange";


ReactDOM.render(
  <>
    <h1>This is {Abhishek}</h1>
    <h2>{`My name is ${Abhishek}. Pune city`}</h2>
    <Heading/>
    <Component1/>
    <EventsInReact/>
    <InputField/>
   
  
  </>,
  document.getElementById('root')
);




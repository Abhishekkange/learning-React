import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className = 'NotesBox' >

    
      <h1>Notes Application</h1>
      <div className='header'>

      <input className='inputText' type='text' placeholder='Enter Note'/>
      <button className='addBtn'>Add</button>


      </div>
      
  </div>

  </>
);



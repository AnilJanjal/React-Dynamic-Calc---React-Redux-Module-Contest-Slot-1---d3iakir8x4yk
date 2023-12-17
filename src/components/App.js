// import React,{useState,useEffect} from 'react'
// import '../styles/App.css';
// const App = () => {

//   return (
//     <div id="main">
//       <input id='input1' onChange={}/>
//        +
//       <input id='input2' onChange={}/> 
      
//       <p id='result'></p>
//     </div>
//   )
// }


// export default App;


import React, { useState, useEffect } from 'react';
import '../styles/App.css';

const App = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);

  const handleInputChange1 = (e) => {
    const value = parseInt(e.target.value) || 0;
    setInput1(value);
  };

  const handleInputChange2 = (e) => {
    const value = parseInt(e.target.value) || 0;
    setInput2(value);
  };

  useEffect(() => {
    setResult(input1 + input2);
  }, [input1, input2]);

  return (
    <div id="main">
      <input id="input1" onChange={handleInputChange1} />
      <input id="input2" onChange={handleInputChange2} />
      <p id="result">{result}</p>
    </div>
  );
};

export default App;

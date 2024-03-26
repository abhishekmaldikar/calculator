import React,{useState} from 'react';
import './App.css';

function App() {
  const buttons = ["7","8","9","+","4","5","6","-","1","2","3","*","C","0","=","/"];
  const [data ,setData] = useState("");
  const [displayData , setDisplayData] = useState("");

  function handleSubmit() {
      try {
        if(data === ""){
          setDisplayData("Error");
          return
        }
        const result = eval(data);
        if (isNaN(result)) {
          setDisplayData("NaN");
        } else if (!isFinite(result)) {
          setDisplayData("Infinity");
        } else {
          setDisplayData(result);
        }
      } catch (error) {
        setDisplayData("Error");
      }
  }


  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div>{displayData}</div>
      <input type='text' value={data}/>
      <div style={{width : "300px" , height : "600px" , display : 'flex' , flexWrap : 'wrap'}}>
        {buttons.map((value) => {
          let jsx = null
          if(value === "C"){
            jsx = <button style={{width : "50px" , height : "50px"}} value={value} onClick={() => setData("")}>{value}</button>
          }else if(value === "="){
            jsx = <button style={{width : "50px" , height : "50px"}} value={value} onClick={() => handleSubmit()}>{value}</button>
          }else{
            jsx = <button style={{width : "50px" , height : "50px"}} value={value} onClick={(e) => setData((prev) => prev + e.target.value)}>{value}</button>
          }

          return jsx
        })}
      </div>
    </div>
  );
}

export default App;

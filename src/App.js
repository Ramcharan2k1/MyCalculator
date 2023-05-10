import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [inputField,setInputField]=useState("");
  const [Op1,setOp1] = useState(0);
  const [Op2,setOp2] = useState(0);
  const [lastOperand,setLastOperand] = useState("+");
  const calcButtons=["9","8","7","+","6","5","4","–","3","2","1","x","C","0","=","÷"]
  const handleOnButtonPress= (value)=>{
    if(value === "C"){
      setInputField("")
      setOp1(0);
      setOp2(0);
      setLastOperand("+")
    }
    else if(value === "+" || value === "–" || value === "x" || value === "÷"|| value === "="){
      console.log(lastOperand)
      if(/^\d+$/.test(inputField.slice(-1)) || lastOperand==="="){
        var result
        if(lastOperand === "+"){
          
          result=Op1+Op2;
          setOp1(result)
        }
        else  if(lastOperand === "–"){
          setOp1(Op1-Op2);
        }
        else  if(lastOperand === "x"){
          setOp1(Op1*Op2);
        }
        else  if(lastOperand === "÷"){
          setOp1((Op1/Op2).toFixed(6));
        }
        else if(lastOperand ==="="){
        setOp1(Op1)
        }
       setLastOperand(value);
       setOp2(0);
      }
    }
    else{
      setOp2(Op2*10+parseInt(value));
      if(inputField==="0"){
        setInputField(value)
      }else{
    setInputField(inputField+value);
      }

    }
   
  }
  // useEffect(() => {
  //   if(inputField.length>15)
  //   setInputField("")
  //  }, [inputField]);
   useEffect(() => {
    if(inputField==="")
      setInputField("0")
 else if (lastOperand !== "=")
      setInputField(Op1+lastOperand);
      else 
      setInputField(lastOperand+Op1)
   }, [Op1,lastOperand]);
  return (
    <div className="App">
      <header className="App-header">
        CALCULATOR
      </header>
      <div className='Calculator-Main'>
      <div className='Calculator-Header'>
        <input
          type="text"
          value={inputField || "0"}
          className='Input-Field'
          readOnly={true}
        />
      </div>
      <div className='Calculator-Body'>
        {calcButtons.map((values)=>(
        <input 
        onClick={(event)=>handleOnButtonPress(event.target.value)}
        value={values}
        type="button"
        className='Calculator-Buttons'/>
        ))
        }
      </div>
      </div>
    </div>
  );
}

export default App;

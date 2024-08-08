import { useState } from 'react'

function App() {
  const [inputtext, setInputText] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setInputText('');
    }
    else if (value === 'Del') {
      if (inputtext === 'Infinity' || inputtext === 'NaN') {
        setInputText('');
      } else {
        if (inputtext) {
          setInputText(inputtext.slice(0, -1));
        }
      }
    }
    else if (value === '=') {
      try {
        setInputText(eval(inputtext).toString())
      } catch (error) {
        setInputText(inputtext.slice(0, -1));
      }

    }
    else if (value === '^') {
      setInputText(Math.pow(inputtext, 2).toString());
    }
    else {
      setInputText((preValue) => preValue + value);
    }
  }

  return (
    <>
      <h1 className="h1 maring-top">Calculator</h1>
      <div className="container">
        <div className="calculator">
          <div className="InputDiv">
            <input type="text" id="InputFeild" readOnly className="InputFeild" placeholder="0" value={inputtext} />
          </div>
          <div className="buttonrow">
            <button onClick={() => handleButtonClick('AC')} className="buttons" id="AC">AC</button>
            <button onClick={() => handleButtonClick('Del')} className="buttons" id="Del">Del</button>
          </div>
          <div className="buttonrow">
            <button onClick={() => handleButtonClick('7')} className="buttons" value="7">7</button>
            <button onClick={() => handleButtonClick('8')} className="buttons" value="8">8</button>
            <button onClick={() => handleButtonClick('9')} className="buttons" value="9">9</button>
            <button onClick={() => handleButtonClick('*')} className="buttons" value="*">x</button>
          </div>
          <div className="buttonrow">
            <button onClick={() => handleButtonClick('4')} className="buttons" value="4">4</button>
            <button onClick={() => handleButtonClick('5')} className="buttons" value="5">5</button>
            <button onClick={() => handleButtonClick('6')} className="buttons" value="6">6</button>
            <button onClick={() => handleButtonClick('-')} className="buttons" value="-">-</button>
          </div>
          <div className="buttonrow">
            <button onClick={() => handleButtonClick('1')} className="buttons" value="1">1</button>
            <button onClick={() => handleButtonClick('2')} className="buttons" value="2">2</button>
            <button onClick={() => handleButtonClick('3')} className="buttons" value="3">3</button>
            <button onClick={() => handleButtonClick('+')} className="buttons" value="+">+</button>
          </div>
          <div className="buttonrow">
            <button onClick={() => handleButtonClick('0')} className="buttons" value="0">0</button>
            <button onClick={() => handleButtonClick('.')} className="buttons" value=".">.</button>
            <button onClick={() => handleButtonClick('^')} className="buttons" value="^">Power</button>
            <button onClick={() => handleButtonClick('=')} className="buttons" value="=">=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

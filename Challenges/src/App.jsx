import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { add, divide, multiply, substract } from './features/calc/calcSlice';
function App() {

  const resultState = useSelector((state) => {
    return state.calc.result;
  });

  const dispatch = useDispatch();

  const [firstNumberInput, setFirstNumberInput] = useState(null);
  const [secondNumberInput, setSecondNumberInput] = useState(null);

  // EVENT HANDLERS
  function handleSumClick() {
    dispatch(add({
      firstNumber: firstNumberInput,
      secondNumber: secondNumberInput
    }))
  }

  function handleSubClick() {
    dispatch(substract({
      firstNumber: firstNumberInput,
      secondNumber: secondNumberInput
    }))
  }

  function handleMultClick() {
    dispatch(multiply({
      firstNumber: firstNumberInput,
      secondNumber: secondNumberInput
    }))
  }

  function handleDivClick() {
    dispatch(divide({
      firstNumber: firstNumberInput,
      secondNumber: secondNumberInput
    }))
  }

  return (
    // <div className={"app"}>
    //   <Form />
    // </div>
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          background: "teal",
        }}
      >
        {/* FIRST INPUT */}
        <label>First Number</label>
        <input
          value={firstNumberInput}
          onChange={(e) => setFirstNumberInput(e.target.value)}
        />

        {/* SECOND INPUT */}
        <label>Second Number</label>
        <input
          value={secondNumberInput}
          onChange={(e) => setSecondNumberInput(e.target.value)}
        />

        <button onClick={handleSumClick}>sum</button>

        <button onClick={handleSubClick}>subtract</button>

        <button onClick={handleMultClick}>multiply</button>

        <button onClick={handleDivClick}>divide</button>

        <hr />

        <h2>{resultState}</h2>
      </div>
    </>
  )
}


export default App

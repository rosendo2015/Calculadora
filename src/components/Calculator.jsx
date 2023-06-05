import React, { useState } from "react";
import { Container } from "./styles";
export default function Calculator() {
  const [num, setNum] = useState(0)
  const [oldNum, setOldNum] = useState(0)
  const [operator, setOperator] = useState()

  function inputNum(e) {
    var input = e.target.value
    if (num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
  }
  function clear() {
    setNum(0)
  }
  function porcentage() {
    setNum(num / 100)
  }
  function minusPlus() {
    if (num > 0) {
      setNum(-num)
    } else {
      setNum(Math.abs(num))
    }
  }
  function operadorHandler(e) {
    var operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }
  function calculate() {
    if (operator == '/') {
      setNum(parseFloat(oldNum) / parseFloat(num))
    } else if (operator === 'X') {
      setNum(parseFloat(oldNum) * parseFloat(num))
    } else if (operator === '+') {
      setNum(parseFloat(oldNum) + parseFloat(num))
    } else if (operator === '-') {
      setNum(parseFloat(oldNum) - parseFloat(num))
    }
  }
  return (
    <Container>
      <div className="display">
        <div className="last-calc">1+1</div>
        <div className="result">
          <span>=</span>
          <span className="resultado">{num}</span>
        </div>
      </div>
      <div className="teclado">
        <button className="secondary" onClick={clear}>CE</button>
        <button >C</button>
        <button onClick={porcentage}>%</button>
        <button className="tertiary" onClick={operadorHandler} value='/'>/</button>
        <button onClick={inputNum} value={7}>7</button>
        <button onClick={inputNum} value={8}>8</button>
        <button onClick={inputNum} value={9}>9</button>
        <button className="tertiary" onClick={operadorHandler} value='X'>X</button>
        <button onClick={inputNum} value={4}>4</button>
        <button onClick={inputNum} value={5}>5</button>
        <button onClick={inputNum} value={6}>6</button>
        <button className="tertiary" onClick={operadorHandler} value='-'>-</button>
        <button onClick={inputNum} value={1}>1</button>
        <button onClick={inputNum} value={2}>2</button>
        <button onClick={inputNum} value={3}>3</button>
        <button className="tertiary" onClick={operadorHandler} value='+'>+</button>
        <button onClick={minusPlus}>+/-</button>
        <button onClick={inputNum} value={0}>0</button>
        <button onClick={inputNum} value={'.'} >,</button>
        <button onClick={calculate} className="quartiary">=</button>
      </div>


    </Container>
  )
}
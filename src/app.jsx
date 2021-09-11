import React, { useEffect, useState } from 'react'
import './App.css'
import { calc } from './utils/calc'
// import mexp from 'math-expression-evaluator'

const App = () => {
  const [input, setInput] = useState('0')
  const [number, setNumber] = useState('')
  const [operator, setOps] = useState('')
  const [firstNum, setFirstNum] = useState('')
  const [secondNum, setSecondNum] = useState('')
  const [result, setResult] = useState(0)
  // const [isExpression, setIsExpression] = useState(false)

  const opsBtns = ['+', '-', '*', '/']

  const numBtns = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['0', '.', 'AC']
  ]

  // useEffect(() => {
  //   setFirstNum(input.slice(0, -1))
  // }, [input])

  const handleNumber = (value) => {
    if (number.includes('.') && value === '.') return
    setNumber(number + value)
    setOps('')
    handleInput(value)
  }

  const handleOprs = (op) => {
    if (operator) return
    firstNum ? setFirstNum(input.slice()) : setSecondNum(input.slice())

    if (secondNum) {
      setResult(calc(firstNum, op, secondNum))
      // setFirstNum('')
      // setSecondNum('')
    }
    // setFirstNum(input.slice())
    setOps(op)
    setNumber('')
    handleInput(op)
  }

  useEffect(() => {
    console.log(result)
  }, [result])

  console.log(firstNum)
  console.log(secondNum)

  const handleInput = (value) => {
    if (result) {
      setInput(result)
    } else {
      input === '0' ? setInput(value) : setInput(input + value)
    }
  }

  const onDelete = () => {
    setOps('')
    setNumber('')
    setInput('0')
  }

  const equal = () => {
    handleInput(result)
    // useEffect(() => {
    //   setInput(result)
    // }, [result])
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="input">{input || '0'}</div>
        <div className="buttons">
          <div className="operators">
            {opsBtns.map((op) => (
              <div
                key={op}
                onClick={() => {
                  handleOprs(op)
                }}
              >
                {op}
              </div>
            ))}
          </div>
          <div className="leftPanel">
            {numBtns.map((line) => (
              <div key={line.join()} className="numbers">
                {line.map((btn) => (
                  <div
                    key={btn}
                    onClick={
                      btn === 'AC' ? () => { onDelete() } : () => { handleNumber(btn) }
                    }
                  >
                    {btn}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="equal" onClick={() => { equal() }}>=</div>
        </div>
      </div>
    </div>
  )
}

export default App

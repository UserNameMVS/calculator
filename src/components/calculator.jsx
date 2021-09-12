import React, { useState } from 'react'
import mexp from 'math-expression-evaluator'
import OperatorButton from './operatorButton'
import NumButtons from './numButtons'

const Calculator = () => {
  const [input, setInput] = useState('0')
  const [operator, setOps] = useState('')
  const [number, setNumber] = useState('')
  const [isExpression, setIsExpression] = useState()

  const opsBtns = ['+', '-', '*', '/']

  const numBtns = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    ['0', '.', 'AC']
  ]

  const handleNumber = (value) => {
    if (number.includes('.') && value === '.') return
    if (!operator && isExpression) {
      setOps('')
      setIsExpression('')
      setNumber(value)
      setInput(value)
    } else {
      setNumber(number + value)
      setOps('')
      handleInput(value)
      setIsExpression(false)
    }
  }

  const handleOprs = (op) => {
    if (input === '0' || operator) return
    setOps(op)
    handleInput(op)
  }

  const handleInput = (value) => {
    input === '0' || (isExpression && number) ? setInput(value) : setInput(input + value)
  }

  const onDelete = () => {
    setOps('')
    setNumber('')
    setInput('0')
    setIsExpression('')
  }

  const equal = () => {
    try {
      if (input !== 0 && input) {
        setIsExpression(true)
        setOps('')
        setNumber('')
        const result = opsBtns.includes(input.slice(-1))
          ? mexp.eval(input.slice(0, -1))
          : mexp.eval(input)
        setInput(result)
      }
    } catch (e) {
      setInput('ERROR')
    }
  }

  return (
    <div className="calculator">
      <div className="input">{input || '0'}</div>
      <div className="buttons">
        <div className="operators">
          {opsBtns.map((op, i) => (
            <OperatorButton key={i} operator={op} onOperator={handleOprs} />
          ))}
        </div>
        <div className="leftPanel">
          {numBtns.map((line) => (
            <NumButtons key={line.join()} line={line} onNumber={handleNumber} onDelete={onDelete} />
          ))}
        </div>
        <div
          className="equal"
          onClick={() => {
            equal()
          }}
        >
          =
        </div>
      </div>
    </div>
  )
}

export default Calculator

import React from 'react'
import PropTypes from 'prop-types'

const NumButtons = ({ line, onNumber, onDelete }) => {
  return (
    <div className="numbers">
      {line.map((btn) => (
        <div key={btn} onClick={btn === 'AC'
          ? () => { onDelete() }
          : () => { onNumber(btn) }}
        >
          {btn}
        </div>
      ))}
    </div>
  )
}

NumButtons.propTypes = {
  line: PropTypes.array.isRequired,
  onNumber: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default NumButtons

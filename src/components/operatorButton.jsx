import React from 'react'
import PropTypes from 'prop-types'

const OperatorButton = ({ onOperator, operator }) => {
  return (
    <div
      onClick={() => { onOperator(operator) }}
    >
      {operator}
    </div>
  )
}

OperatorButton.propTypes = {
  operator: PropTypes.string.isRequired,
  onOperator: PropTypes.func.isRequired
}

export default OperatorButton

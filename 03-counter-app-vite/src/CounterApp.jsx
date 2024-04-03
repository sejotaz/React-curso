import { useState } from "react"
import PropTypes from "prop-types"

export const CounterApp = ({ value }) => {

  const [] = useState()

  const handleAdd = () => { }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <button onClick={handleAdd}>+1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number,
}

CounterApp.defaultProps = {
  value: 0,
}

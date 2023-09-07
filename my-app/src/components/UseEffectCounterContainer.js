import React, { useState } from 'react'
import UseEffectCounter from './UseEffectCounter'

function UseEffectCounterContainer() {
  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={() => {
        setDisplay(!display) // !display sets the state of display to the opposite of current
      }}>
        Toggle Display
      </button>
      { display && <UseEffectCounter />}
    </div>
  )
}

export default UseEffectCounterContainer
import React, { useState, useEffect } from 'react'

function UseEffectCounter() {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('count 1 effect')
    document.title = count;
  }, [count]); // Specify which parameter to be updated

  useEffect(() => {
    console.log('count 2 effect')
    document.title = count2;
  }, [count2]); // Specify which parameter to be updated

  return (
    <div>
      <button
      onClick={
        () => setCount(count => count + 1)
      }>
          Increment Count ({count})
      </button>
      <button
      onClick={
        () => setCount2(count2 => count2 + 1)
      }>
          Increment Count ({count2})
      </button>
    </div>
  )
}

export default UseEffectCounter
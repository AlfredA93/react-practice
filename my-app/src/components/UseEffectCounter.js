import React, { useState, useEffect } from 'react'

function UseEffectCounter() {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log('count 1 effect')
    document.title = count;
  }, [count]); // Specify which parameter to be updated

  useEffect(() => {
    console.log('count 2 effect')
    document.title = count2;
  }, [count2]); // Specify which parameter to be updated

  useEffect(() => {
    console.log('Creating timer');
    const interval = setInterval(() => {
      console.log('Interval executed')
      setTime(time => time + 1)
    }, 1000);
    return () => { // Add return on the timer useEffect to clear interval and unmount 
      console.log('Cleaning up!')
      clearInterval(interval)
    }
  }, []); // Specifies that the affect only runs once by entering an empty parameter

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
      <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectCounter
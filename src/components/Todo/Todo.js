import React, {useState, useEffect} from 'react'

function Todo() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const parsedCount = Number(localStorage.getItem("count") || 0)
        setCounter(parsedCount)
      }, [])

    useEffect(() => {
        localStorage.setItem("count", counter)
      }, [counter])

    return (
        <div>
          <div>{counter}</div>
          <button onClick={() => setCounter(c => c + 1)}>+</button>
          <button onClick={() => setCounter(0)}>reset</button>

        </div>
    )
}

export default Todo

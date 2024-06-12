import { useState } from 'react'

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)

  // <button className='btn btn-primary' type='button' onClick={() => setCounter(counter + 1)}>Increase</button>

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(initialValue)
  }

 return { increase, decrease, reset, count}
}

export default useCounter
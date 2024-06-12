import { useState } from 'react'

const useToggle = (initialVal: unknown) => {
  const [state, setState] = useState(initialVal)

 
  const toggle = () => {
    setState((prev: unknown) => !prev)
  }

  return [state, toggle]
}

export default useToggle
import useCounter from './useCounter.tsx'

const App = () => {
  
  const { count, increase, decrease, reset } = useCounter(0)


  // hook to show counter
  // increase, decrease, set to zero



 return (
  <>
    <h1>Counter: {count}</h1>
    <div className='flex gap-2'>  
    <button className='btn btn-primary' type='button' onClick={increase}>Increase</button>
    <button className='btn btn-primary' type='button' onClick={decrease}>Decrease</button>
    <button className='btn btn-primary' type='button' onClick={reset}>Reset</button>
    </div>
  </>
 )
}

export default App
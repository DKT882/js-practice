import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import { decrement, increment, reset } from './features/counters/CountSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  function handleIncrementclick() {
    dispatch(increment())

  }
  function handleDedrementClick() {
    dispatch(decrement())
  }
  function handleResetClick() {
    dispatch(reset())
  }
  return (
    <div className='container' >
      <button onClick={handleIncrementclick}>+</button>
      <p>count: {count}</p>
      <button onClick={handleDedrementClick}>-</button>
      <button onClick={handleResetClick}>Reset</button>

    </div>
  )
}

export default App
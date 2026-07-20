import { useDispatch, useSelector } from 'react-redux'

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
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-slate-100">
      <p className="text-2xl font-bold text-slate-800">
        count: <span className="text-indigo-600">{count}</span>
      </p>

      <div className="flex items-center gap-4">
        <button
          onClick={handleIncrementclick}
          className="px-6 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg shadow hover:bg-green-700 active:scale-95 transition"
        >
          +
        </button>
        <button
          onClick={handleDedrementClick}
          className="px-6 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg shadow hover:bg-red-700 active:scale-95 transition"
        >
          -
        </button>
        <button
          onClick={handleResetClick}
          className="px-6 py-2 text-lg font-semibold text-white bg-slate-600 rounded-lg shadow hover:bg-slate-700 active:scale-95 transition"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
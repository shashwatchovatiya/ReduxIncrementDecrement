import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { IncrementNumber, DecrementNumber } from './Action/index'


function App() {
  const myState = useSelector((state) => state.Change)
  const dispatch = useDispatch()

  return (
    <>
      {/* <h1>Hello</h1> */}
      <div className='w-full h-screen flex gap-11 justify-center items-center text-5xl '>
        <div className="flex gap-11 justify-center items-center bg-slate-100 p-5 text-white border-2 rounded-xl border-black">
          <button
          onClick={() => dispatch(DecrementNumber())}
          >
            <span className=' px-4 py-0 hover:bg-gray-500 hover:text-white transition-all rounded-xl text-blue-600' title='DECREMENT_NUMBER'>-</span></button>

          <input type="text" readOnly className='bg-white text-black  rounded-xl w-16 px-1' value={myState} />

          <button
            onClick={() => dispatch(IncrementNumber())}
            aria-label="Increment Number"
          > 
            <span className='px-4 py-0 hover:bg-gray-500 hover:text-white transition-all rounded-xl text-blue-600' title='INCREMENT_NUMBER'>+</span>
          </button>
        </div>
      </div>

    </>
  )
}

export default App

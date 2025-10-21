import { useState } from 'react'
import './App.css'
import CountBox from './component/CountBox'
import counterStore from './stores/counterStore'

function App() {
  const { count, increment, decrement, reset } = counterStore()

  return (
    <>
     <div className="App">
      <h1>count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button className="reset-btn" onClick={reset}>Reset</button>
      <CountBox/>
     </div>
    </>
  )
}

export default App

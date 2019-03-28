import React from 'react'
import Clicker from './Components/Clicker'
import Counter from './Components/Counter'

const App = () => {
  return (
    <div className="container">
      <Counter>
        {({count, updateCount}) => {
          return (
            <Clicker
              count={count}
              onClick={() => updateCount(count + 1)}
              onReset={() => updateCount(0)}
            />
          )
        }}
      </Counter>
    </div>
  )
}

export default App
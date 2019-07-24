import React, { useContext } from 'react'
import ReactDOM from 'react-dom'

// Create a Context
const NumberContext = React.createContext()
// It returns an object with 2 values:
// { Provider, Consumer }
const BContext = React.createContext('Initial value')

const App = () => {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <>
    <NumberContext.Provider value={42}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
    <Any>
      <BContext.Consumer>
        {value => <h1>Hola, {value} !</h1>}
      </BContext.Consumer>
    </Any>
    </>
  )
}

const Display = () => {
  // Use the Consumer to grab the value from context
  // Notice this component didn't get any props!
  const value = useContext(NumberContext)
  return <div>The answer is {value}</div>
}

const Any = ({children}) => {
  return(
    <BContext.Provider value='World'>
      {children}
    </BContext.Provider>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))

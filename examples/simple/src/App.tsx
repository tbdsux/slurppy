import logo from './logo.svg'
import './App.css'
import { useDispatcher, useSlurp } from 'slurppy'

type SampleType = {
  hello: string | number
}

function App() {
  const { state, updated } = useSlurp<SampleType[]>()
  const { insert, reset } = useDispatcher()

  const addItem = () => {
    insert({ hello: 'another' })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {JSON.stringify(state)}

        {JSON.stringify(window.localStorage.getItem('slurpdb'))}

        <button onClick={addItem}>add new item</button>
        <button onClick={reset}>remove all</button>

        <p>{updated}</p>
      </header>
    </div>
  )
}

export default App

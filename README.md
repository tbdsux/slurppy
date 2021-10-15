# slurppy

Simple reactive array db for react.

## Usage

```tsx
import { useDispatcher, useSlurp, SlurpProvider } from 'slurppy'

const App = () => {
  const { state, updated } = useSlurp()
  const { insert, reset } = useDispatcher()

  const addItem = () => {
    insert({ new: 'another' })
  }

  return (
    <SlurpProvider initialData={[{ hello: 123 }]} autoRead autoWrite>
      <div>
        {JSON.stringify(state)}

        {JSON.stringify(window.localStorage.getItem('slurpdb'))}

        <button onClick={addItem}>add new item</button>
        <button onClick={reset}>remove all</button>
      </div>
    </SlurpProvider>
  )
}

export default App
```

##

&copy; 2021 | [License](./LICENSE)

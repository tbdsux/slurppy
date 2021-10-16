import React, {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
  useState
} from 'react'
import LocalStorage from '../adapters/localstorage'
import { BaseDBMap } from '../typings/db'
import { SlurpReducer, SlurpReducerActionsProps } from './reducer'

interface SlurpProviderProps<T extends BaseDBMap> {
  children: ReactNode
  initialData?: T
  autoWrite?: boolean // auto write on each update
  autoRead?: boolean // auto read from db
  keyname?: string // localstorage name
}

interface SlurpContextProps<T extends BaseDBMap> {
  state: T
  dispatcher: Dispatch<SlurpReducerActionsProps<T>>
  updated: boolean
  db: LocalStorage<T>
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SlurpContext = createContext<SlurpContextProps<any>>({
  state: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatcher: () => {},
  updated: false,
  db: new LocalStorage('', false, [])
})

const SlurpProvider = <T extends BaseDBMap>({
  children,
  initialData,
  autoWrite = false,
  autoRead = false,
  keyname = 'slurpdb'
}: SlurpProviderProps<T>) => {
  const db = new LocalStorage<T>(keyname, autoRead, initialData)

  const [state, dispatch] = useReducer(SlurpReducer, db.data)
  const [updated, setUpdated] = useState(false)

  // wrapper for dispatching functions
  const dispatcher = <T extends BaseDBMap>(v: SlurpReducerActionsProps<T>) => {
    const func = dispatch(v)

    setUpdated(true)

    return func
  }

  useEffect(() => {
    if (autoWrite && updated) {
      db.data = state
      db.write()

      setUpdated(false)
    }
  }, [updated, state])

  return (
    <SlurpContext.Provider value={{ state: state, dispatcher, updated, db }}>
      {children}
    </SlurpContext.Provider>
  )
}

export { SlurpContext }
export type { SlurpContextProps, SlurpProviderProps }

export default SlurpProvider

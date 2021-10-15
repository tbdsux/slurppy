import SlurpProvider, {
  SlurpContext,
  SlurpContextProps,
  SlurpProviderProps
} from './context/provider'

import { useDispatcher } from './hooks/useDispatcher'
import { useSlurp } from './hooks/useSlurp'

import LocalStorage from './adapters/localstorage'

import { SlurpReducer, SlurpReducerActionsProps } from './context/reducer'
import { BaseDBMap } from './typings/db'

export { useSlurp, useDispatcher, LocalStorage, SlurpReducer, SlurpProvider }

// export types
export type {
  SlurpReducerActionsProps,
  BaseDBMap,
  SlurpContext,
  SlurpContextProps,
  SlurpProviderProps
}

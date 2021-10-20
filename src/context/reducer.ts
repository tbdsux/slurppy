import { BaseDBMap } from '../typings/db'

type SlurpReducerActionsProps<T extends BaseDBMap> =
  | { type: 'update'; index: number; data: unknown }
  | { type: 'remove'; index: number }
  | { type: 'insert'; data: unknown }
  | { type: 'action'; func: (state: T) => T }
  | { type: 'set'; data: T }
  | { type: 'reset' }

const SlurpReducer = <T extends BaseDBMap>(
  state: T,
  action: SlurpReducerActionsProps<T>
): T => {
  switch (action.type) {
    case 'update': {
      if (action.index > -1 && action.index < state.length) {
        const x = state
        x.splice(action.index, 1)
        x.splice(action.index, 0, action.data)

        return x
      }

      return state
    }

    case 'insert': {
      return [action.data, ...state] as unknown as T
    }

    case 'remove': {
      if (action.index > -1 && action.index < state.length) {
        const x = state
        x.splice(action.index, 1)

        return x
      }

      return state
    }

    case 'action': {
      return action.func(state)
    }

    case 'set': {
      return action.data
    }

    case 'reset': {
      return [] as unknown as T
    }
    default:
      return state
  }
}

export type { SlurpReducerActionsProps }
export { SlurpReducer }

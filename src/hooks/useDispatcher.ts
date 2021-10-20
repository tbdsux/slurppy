import { BaseDBMap } from '../typings/db'
import { useSlurp } from './useSlurp'

const useDispatcher = <T extends BaseDBMap>() => {
  const { dispatcher } = useSlurp<T>()

  const update = (index: number, data: T) =>
    dispatcher({ type: 'update', index: index, data: data })

  const action = (func: (state: T) => T) => {
    dispatcher({ type: 'action', func: func })
  }

  const set = (data: T) => dispatcher({ type: 'set', data: data })

  const remove = (index: number) => dispatcher({ type: 'remove', index: index })

  const insert = (data: T) => dispatcher({ type: 'insert', data: data })

  const reset = () => dispatcher({ type: 'reset' })

  return { set, remove, insert, reset, update, action }
}

export { useDispatcher }

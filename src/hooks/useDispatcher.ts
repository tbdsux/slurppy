import { BaseDBMap } from '../typings/db'
import { useSlurp } from './useSlurp'

const useDispatcher = <T extends BaseDBMap>() => {
  const { dispatcher } = useSlurp<T>()

  const update = <K>(index: number, data: K) =>
    dispatcher({ type: 'update', index: index, data: data })

  const insert = <K>(data: K) => dispatcher({ type: 'insert', data: data })

  const action = (func: (state: T) => T) => {
    dispatcher({ type: 'action', func: func })
  }

  const set = (data: T) => dispatcher({ type: 'set', data: data })

  const remove = (index: number) => dispatcher({ type: 'remove', index: index })

  const reset = () => dispatcher({ type: 'reset' })

  return { set, remove, insert, reset, update, action }
}

export { useDispatcher }

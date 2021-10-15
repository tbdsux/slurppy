import { BaseDBMap } from '../typings/db'
import { useSlurp } from './useSlurp'

const useDispatcher = () => {
  const { dispatcher } = useSlurp()

  const update = (index: number, data: never) =>
    dispatcher({ type: 'update', index: index, data: data })

  const set = <T extends BaseDBMap>(data: T) =>
    dispatcher({ type: 'set', data: data })

  const remove = (index: number) => dispatcher({ type: 'remove', index: index })

  const insert = <T>(data: T) => dispatcher({ type: 'insert', data: data })

  const reset = () => dispatcher({ type: 'reset' })

  return { set, remove, insert, reset, update }
}

export { useDispatcher }

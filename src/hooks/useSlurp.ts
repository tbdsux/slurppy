import { useContext } from 'react'
import { SlurpContext, SlurpContextProps } from '../context/provider'
import { BaseDBMap } from '../typings/db'

const useSlurp = <T extends BaseDBMap>() => {
  const context = useContext<SlurpContextProps<T>>(SlurpContext)

  if (context === undefined) {
    throw new Error(
      'Component is not wrapped with <SlurpProvider></SlurpProvider>'
    )
  }

  return context
}

export { useSlurp }

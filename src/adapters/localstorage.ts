import { BaseDBMap } from '../typings/db'

class LocalStorage<T extends BaseDBMap> {
  key: string
  data: T

  constructor(
    key: string,
    autoRead: boolean,
    initialData: T = [] as BaseDBMap as T
  ) {
    this.key = key

    this.data = initialData ?? []

    if (autoRead) {
      this.read() // if data exists, this.data will be overwritten
    }
  }

  write() {
    window.localStorage.setItem(this.key, JSON.stringify(this.data))
  }

  read() {
    const value = window.localStorage.getItem(this.key)

    if (value != null) {
      this.data = JSON.parse(value)
    }
  }
}

export default LocalStorage

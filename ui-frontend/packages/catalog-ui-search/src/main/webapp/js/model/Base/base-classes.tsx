/**
 *  Attempt to pull out what is a fairly common pattern around subscribing
 *  to instances.
 */
export class Subscribable<T extends { thing: string; args?: any }> {
  subscriptionsToMe: Record<string, Record<string, (val: T['args']) => void>>
  subscribeTo({
    subscribableThing,
    callback,
  }: {
    subscribableThing: T['thing']
    callback: (val: T['args']) => void
  }) {
    const id = Math.random().toString()
    if (!this.subscriptionsToMe[subscribableThing]) {
      this.subscriptionsToMe[subscribableThing] = {}
    }
    this.subscriptionsToMe[subscribableThing][id] = callback
    return () => {
      delete this.subscriptionsToMe[subscribableThing][id]
    }
  }
  _notifySubscribers(parameters: T) {
    const subscribers = this.subscriptionsToMe[parameters['thing']]
    if (subscribers)
      Object.values(subscribers).forEach((callback) =>
        callback(parameters['args'])
      )
  }
  constructor() {
    this.subscriptionsToMe = {}
  }
}

export class Overridable<T> extends Subscribable<{
  thing: 'override'
  args: T
}> {
  private value: T
  constructor(value: T) {
    super()
    this.value = value
  }
  override(newValue: T) {
    this.value = newValue
    this._notifySubscribers({ thing: 'override', args: newValue })
  }
  get() {
    return this.value
  }
}

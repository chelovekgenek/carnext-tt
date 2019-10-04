import { CallEffectDescriptor } from "redux-saga/effects"
import { EffectProvider } from "redux-saga-test-plan/providers"

export const wrapCall = (matcher: Function, callback: () => void): EffectProvider<CallEffectDescriptor<any>> => (
  { fn, args: [id] },
  next,
) => {
  if (fn === matcher) {
    return callback()
  } else {
    return next()
  }
}

import { reducer, on } from "ts-action"
import { PromotionActions } from "./actions"

export interface IState {
  fetching: boolean
  promoted?: boolean
}

const initialState: IState = {
  fetching: false,
}

export default reducer(
  initialState,
  on(PromotionActions.request, state => ({ ...state, fetching: true })),
  on(PromotionActions.success, state => ({ ...state, fetching: false, promoted: true })),
  on(PromotionActions.failure, state => ({ ...state, fetching: false, promoted: false })),
)

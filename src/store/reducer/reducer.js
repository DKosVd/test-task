import { updateObjectInArray } from "../../utils/updateObjectInArray"
import { actionType } from "../actionType"


export function reducer(state, action) {
    switch (action.type) {
      case actionType.ADD_PART_OF_ENTITY:
        return {
          items: [...updateObjectInArray(state.items, action)]
        }
      case actionType.ADD_ENTITY:
        return {
          items: [...state.items, action.payload]
        }
      default:
        throw new Error()
    }
  }
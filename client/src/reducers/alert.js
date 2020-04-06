import { SET_ALERT, REMOVE_ALERT } from '../actions/types'
const initialState = []

//payload = data
export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        //dispatch this type
        case SET_ALERT:
            //return the array with payload
            return [...state, payload]
        case REMOVE_ALERT:
            //filters through and return all alerts except for one that matches the payload
            return state.filter(alert => alert.id !== payload)
        default:
            return state
    }
}
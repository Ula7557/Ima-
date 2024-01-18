import { TOOGLE_INPUT } from "../types/input"

let initialState = {
    state: false
}

const InputState = (state = initialState, action) => {
    switch(action.type) {
        case TOOGLE_INPUT: 
        return {state: action.payload}
        default:
            return state
    }
}

export default InputState
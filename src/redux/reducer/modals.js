import { TOOGLE_HAMBURGER } from "../types/modals"

let initialState = {
    state: false
}

const HamburgerState = (state = initialState, action) => {
    switch(action.type) {
        case TOOGLE_HAMBURGER: 
        return {state: action.payload}
        default:
            return state
    }
}

export default HamburgerState
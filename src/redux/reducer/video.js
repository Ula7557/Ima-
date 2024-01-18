import { VIDEO_SHOW } from "../types/video"

let initialState = {
    state: false
}

const HamburgerState = (state = initialState, action) => {
    switch(action.type) {
        case VIDEO_SHOW: 
        return {state: action.payload}
        default:
            return state
    }
}

export default HamburgerState
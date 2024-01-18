import { TOOGLE_INPUT } from "../types/input"

const toggleInput = (state) => {
    return {
        type: TOOGLE_INPUT,
        payload: state
    }
}

export {
    toggleInput
}
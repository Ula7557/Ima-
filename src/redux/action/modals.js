import { TOOGLE_HAMBURGER } from "../types/modals"

const toggleHamburger = (state) => {
    return {
        type: TOOGLE_HAMBURGER,
        payload: state
    }
}

export {
    toggleHamburger
}
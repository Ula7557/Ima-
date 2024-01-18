import { VIDEO_SHOW } from "../types/video"

const toggleVideo = (state) => {
    return {
        type: VIDEO_SHOW,
        payload: state
    }
}

export {
    toggleVideo
}
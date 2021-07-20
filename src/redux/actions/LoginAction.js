import {CHANGE_INFO_FACEBOOK, CHANGE_INFO_GOOGLE} from "../types/LoginType";

export const loginFacebookAction = (info) => {
    return {
        type: CHANGE_INFO_FACEBOOK,
        info
    }
}

export const loginGoogleAction = (info) => {
    return {
        type: CHANGE_INFO_GOOGLE,
        info
    }
}
import {CHANGE_INFO_FACEBOOK, CHANGE_INFO_GOOGLE} from "../types/LoginType";

const initialSate = {
    infoFacebook: {
        id: '',
        name: '',
        email: '',
    },
    infoGoogle: {
        id: '',
        name: '',
        email: '',
    }
}

const LoginReducer = (state = initialSate, action) => {
    switch (action.type)
    {
        case CHANGE_INFO_FACEBOOK: {
            return { ...state, infoFacebook: action.info}
        }
        case CHANGE_INFO_GOOGLE: {
            return { ...state, infoGoogle: action.info}
        }
        default:
            break;
    }
    return {...state}
}

export default LoginReducer;
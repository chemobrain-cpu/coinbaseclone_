import { SIGNUP_USER, FORCEUSERIN } from "../action/appStorage";


const initialState = {
    token: "",
    expiresIn: "",
    user: null,


}


export const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            if (action.payload) {
                return {


                }
            }
            break;
        case FORCEUSERIN:
            if (action.payload) {
                return {
                    


                }
            }
            break;

        default:
            return state
            break;
    }

}

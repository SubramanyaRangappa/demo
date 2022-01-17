import { SELECTED_PRODUCT, SET_PRODUCTS } from "../actions";

const initialState = []

const setProductReducer = (state={initialState}, {type, payload}) => {
    switch (type) {
        case SET_PRODUCTS:
            return {...state, state:payload};
    
        default:
            return state;
    }
}

export default setProductReducer
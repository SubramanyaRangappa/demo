import { REMOVE_SELECTED_PRODUCTS, SELECTED_PRODUCT } from "../actions";

const initialState = {}

 const selectedProduct = (state={initialState}, {type, payload}) => {
    switch (type) {
        case SELECTED_PRODUCT:
               return {...state, product:payload};
        case REMOVE_SELECTED_PRODUCTS:
                return {}
    
        default:
            return state;
    }
}

export default selectedProduct
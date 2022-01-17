import { combineReducers } from "redux";
import selectedProduct from "./selectedProduct";
import setProductReducer from "./setProductReducer";



const reducers = combineReducers({
    allProducts : setProductReducer,
    product : selectedProduct
})

export default reducers
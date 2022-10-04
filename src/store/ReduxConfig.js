import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
//Import all reducer here
import ProductReducer from './reducer/ProductReducer';
import DetailReducer from './reducer/DetailReducer';
import CheckoutReducer from './reducer/CheckoutReducer';

const reducer = combineReducers({
	product: ProductReducer,
	detail: DetailReducer,
	checkout: CheckoutReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));

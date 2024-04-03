import { createSlice } from '@reduxjs/toolkit';
import { productAction } from '../actions/productAction';

let initialState = {
	productList: [],
	selectedItem: null,
	loading: false,
};

// function productReducer(state = initialState, action) {
// 	let { type, payload } = action;

// 	switch (type) {
// 		case 'GET_PRODUCT_SUCCESS':
// 			return { ...state, productList: payload.data, loading: false };
// 		case 'GET_SINGLE_PRODUCT_SUCCESS':
// 			return { ...state, selectedItem: payload.data, loading: false };
// 		case 'GET_PRODUCT_DETAIL_START':
// 			return { ...state, loading: true };
// 		case 'GET_PRODUCT_DETAIL_FAILURE':
// 			return { ...state, loading: false };
// 		default:
// 			return { ...state };
// 	}
// }

// export default productReducer;

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		getAllProduct(state, action) {
			state.productList = action.payload.data;
		},
		getsingleProduct(state, action) {
			state.selectedItem = action.payload.data;
		},
	},
});

console.log(productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;

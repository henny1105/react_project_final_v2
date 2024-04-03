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
		// 상품 목록 로딩 시작
		fetchProductsStart(state) {
			state.loading = true;
		},
		// 상품 목록 로딩 성공
		getAllProduct(state, action) {
			state.productList = action.payload.data;
			state.loading = false;
		},
		// 특정 상품 로딩 성공
		getsingleProduct(state, action) {
			state.selectedItem = action.payload.data;
			state.loading = false;
		},
		// 상품 정보 로딩 실패
		fetchProductsFailure(state) {
			state.loading = false;
		},
	},
});

export const { fetchProductsStart, getAllProduct, getsingleProduct, fetchProductsFailure } = productSlice.actions;

export default productSlice.reducer;

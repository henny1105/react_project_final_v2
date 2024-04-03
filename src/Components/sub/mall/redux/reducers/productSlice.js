import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let initialState = {
	productList: [],
	selectedItem: null,
	loading: false,
	error: null,
};

export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkApi) => {
	try {
		let url = `https://my-json-server.typicode.com/henny1105/react_project_final/products/?q=${searchQuery}`;
		let response = await fetch(url);
		return await response.json();
	} catch (error) {
		throw new Error(error.message);
	}
});

export const fetchProductDetail = createAsyncThunk('product/fetchDetail', async (productId, thunkApi) => {
	try {
		let url = `https://my-json-server.typicode.com/henny1105/react_project_final/products/${productId}`;
		let response = await fetch(url);
		return await response.json();
	} catch (error) {
		return thunkApi.rejectWithValue(error.message);
	}
});

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		// 기존 리듀서는 유지
	},
	extraReducers: (builder) => {
		builder
			// 기존 fetchProducts 처리 로직 유지
			.addCase(fetchProducts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.loading = false;
				state.productList = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(fetchProductDetail.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchProductDetail.fulfilled, (state, action) => {
				state.loading = false;
				state.selectedItem = action.payload;
			})
			.addCase(fetchProductDetail.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

// Actions 내보내기
export const productActions = { ...productSlice.actions, fetchProducts, fetchProductDetail };

export default productSlice.reducer;

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

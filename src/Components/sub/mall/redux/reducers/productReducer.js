let initialState = {
	productList: [],
	selectedItem: null,
	loading: false,
};

function productReducer(state = initialState, action) {
	let { type, payload } = action;

	switch (type) {
		case 'GET_PRODUCT_SUCCESS':
			return { ...state, productList: payload.data, loading: false };
		case 'GET_SINGLE_PRODUCT_SUCCESS':
			return { ...state, selectedItem: payload.data, loading: false };
		case 'GET_PRODUCT_DETAIL_START':
			return { ...state, loading: true };
		case 'GET_PRODUCT_DETAIL_FAILURE':
			return { ...state, loading: false };
		default:
			return { ...state };
	}
}

export default productReducer;

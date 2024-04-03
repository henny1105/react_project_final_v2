// import { productActions } from '../reducers/productSlice';

// function getProducts(searchQuery) {
// 	return async (dispatch) => {
// 		let url = `https://my-json-server.typicode.com/henny1105/react_project_final/products/?q=${searchQuery}`;
// 		let response = await fetch(url);
// 		let data = await response.json();

// 		// dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { data } });
// 		dispatch(productActions.getAllProduct({ data }));
// 	};
// }

// function getPorductDetail(id) {
// 	return async (dispatch) => {
// 		dispatch({ type: 'GET_PRODUCT_DETAIL_START' });
// 		try {
// 			let url = `https://my-json-server.typicode.com/henny1105/react_project_final/products/${id}`;
// 			let response = await fetch(url);
// 			let data = await response.json();
// 			dispatch({ type: 'GET_SINGLE_PRODUCT_SUCCESS', payload: { data } });
// 		} catch (error) {
// 			dispatch({ type: 'GET_PRODUCT_DETAIL_FAILURE', payload: error });
// 		}
// 	};
// }

// export const productAction = { getPorductDetail };

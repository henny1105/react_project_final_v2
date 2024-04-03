import React from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductPage = () => {
	let [query, setQuery] = useSearchParams();

	const handleSearch = (searchTerm) => {
		setQuery({ search: searchTerm }, { replace: true });
	};

	console.log(query.get('search'));
	// 현재 입력된 값 가져오기

	return (
		<div>
			<h1>Show All Products!!!</h1>
			<input type='text' placeholder='Search products...' onChange={(e) => handleSearch(e.target.value)} />
			<p>Searching for: {query.get('search')}</p>
		</div>
	);
};
export default ProductPage;

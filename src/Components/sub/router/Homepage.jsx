import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
	const navigate = useNavigate();
	const goProductPage = () => {
		navigate('./products?q=pants');
	};

	return (
		<div>
			<h1>HomePage</h1>
			<Link to='/router_project/about'>about 페이지로 이동하기</Link>
			<button onClick={goProductPage}>Go to product Page</button>
		</div>
	);
};

export default HomePage;

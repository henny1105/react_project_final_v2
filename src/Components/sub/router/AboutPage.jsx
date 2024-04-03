import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
	const navigate = useNavigate();
	const goToHomepage = () => {
		navigate('/router_project');
	};
	return (
		<div>
			<h1>About Page!</h1>
			<button onClick={goToHomepage}>홈페이지로 가보자구</button>
		</div>
	);
};

export default AboutPage;

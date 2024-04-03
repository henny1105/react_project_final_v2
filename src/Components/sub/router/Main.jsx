import { useState } from 'react';
import './Homepage.css';
import AboutPage from './AboutPage';
import HomePage from './Homepage';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProductPage from './ProductPage';
import ProductDetailPage from './ProductDetailPage';
import LoginPage from './LoginPage';
import UserPage from './UserPage';

const Main = () => {
	const [authenticate, setAuthenticate] = useState(false);

	const PrivateRoute = ({ children }) => {
		return authenticate ? children : <Navigate to='/router_project/login' />;
	};

	return (
		<div>
			<Routes>
				<Route index element={<HomePage />} />
				<Route path='about' element={<AboutPage />} />
				<Route path='products' element={<ProductPage />} />
				<Route path='products/:id' element={<ProductDetailPage />} />
				<Route path='login' element={<LoginPage onLogin={setAuthenticate} />} />
				<Route
					path='user'
					element={
						<PrivateRoute>
							<UserPage />
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
};

export default Main;

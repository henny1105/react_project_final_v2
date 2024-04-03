import ProductDetail from '../ProductDetail';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

	return isAuthenticated ? <ProductDetail /> : <Navigate to='/mall_project/login' />;
};

export default PrivateRoute;

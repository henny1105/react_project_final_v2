import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchProducts } from './redux/reducers/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const useWindowSize = () => {
	const [size, setSize] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setSize(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return size;
};

const ProductAll = () => {
	const width = useWindowSize();
	const productList = useSelector((state) => state.product.productList);
	const [query] = useSearchParams();
	const dispatch = useDispatch();

	const getProducts = async () => {
		let searchQuery = query.get('q') || '';
		dispatch(fetchProducts(searchQuery));
	};

	useEffect(() => {
		getProducts();
	}, [query]);

	return (
		<div>
			<Container className='mall_project'>
				<Row>
					{productList &&
						productList.map((product) => (
							<Col lg={width >= 1440 ? 2 : width <= 989 ? 3 : 3} key={product.id}>
								<ProductCard item={product} />
							</Col>
						))}
				</Row>
			</Container>
		</div>
	);
};

export default ProductAll;

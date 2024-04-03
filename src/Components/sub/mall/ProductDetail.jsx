import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from './redux/reducers/productSlice';

const ProductDetail = () => {
	let { id } = useParams();
	const dispatch = useDispatch();

	const product = useSelector((state) => state.product.selectedItem);
	const loading = useSelector((state) => state.product.loading);

	useEffect(() => {
		if (id) {
			dispatch(fetchProductDetail(id));
		}
	}, [dispatch, id]);

	if (loading || !product) {
		return (
			<Container className='mall_cont'>
				<SyncLoader className='loading_spinner' color='rgba(204, 7, 30, 0.5)' loading={loading || !product} size={10} aria-label='Loading Spinner' data-testid='loader' />
			</Container>
		);
	}

	const formatPrice = (price) => {
		return price.toLocaleString();
	};

	return (
		<Container className='product_detail_page'>
			<Row>
				<div className='product_detail'>
					<div className='img_box'>
						<Col>
							<img src={product?.img} alt={product?.title} />
						</Col>
					</div>
					<div className='txt_box'>
						<div className='top_box'>
							{product?.new && <p className='new_product'>신제품</p>}
							{product?.choice && <p className='choice_cont'>Conscious Choice</p>}
						</div>
						<div className='product_title'>{product?.title}</div>
						<div className='price'>₩{formatPrice(product?.price)}</div>
						<Dropdown>
							<Dropdown.Toggle variant='secondary' id='dropdown-basic'>
								Dropdown Button
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{product?.size.map((size, index) => (
									<Dropdown.Item key={index} href={`#/action-${index}`}>
										{size}
									</Dropdown.Item>
								))}
							</Dropdown.Menu>
						</Dropdown>

						<button>추가</button>
					</div>
				</div>
			</Row>
		</Container>
	);
};

export default ProductDetail;

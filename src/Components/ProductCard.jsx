import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
	const navigate = useNavigate();
	const showDetail = () => {
		navigate(`/mall_project/product/${item.id}`);
	};

	const formatPrice = (price) => {
		return price.toLocaleString(); // 천단위 콤마를 붙임
	};

	return (
		<div className='card'>
			<div className='img_box' onClick={showDetail}>
				<div className='img_wrap'>
					<img src={process.env.PUBLIC_URL + item?.img} alt='product_image' />
				</div>
			</div>
			<div className='product_info'>
				<div className='top_box'>
					{item?.new && <div className='new_product'>신제품</div>}
					{item?.choice && <div className='choice_cont'>Concious Choice</div>}
				</div>
				<div className='product_name'>{item?.title}</div>
				<div className='price'>₩{item?.price && formatPrice(item.price)}</div>
			</div>
		</div>
	);
};

export default ProductCard;

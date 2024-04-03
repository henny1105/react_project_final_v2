import React from 'react';
import { useSelector } from 'react-redux';

const GrandSunBox = () => {
	let count = useSelector((state) => state.count);
	return <div>GrandSonBox {count}</div>;
};

export default GrandSunBox;

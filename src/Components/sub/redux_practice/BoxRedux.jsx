import React from 'react';
import { useSelector } from 'react-redux';
import GrandSunBox from './GrandSunBox';

const BoxRedux = () => {
	let count = useSelector((state) => state.count);
	return (
		<div>
			this is box {count}
			<GrandSunBox />
		</div>
	);
};

export default BoxRedux;

import React from 'react';

const Box = (props) => {
	const result = (result) => {
		// 결과에 따라 user와 computer 값 다르게 하기
		if (result === 'win') {
			return props.title === 'You' ? 'Win' : 'Lose';
		} else if (result === 'lose') {
			return props.title === 'You' ? 'Lose' : 'Win';
		} else if (result === 'tie') {
			return 'Tie';
		}
	};

	// 결과에 따라 box 클래스 네임 주기
	let box = 'box';
	if (result(props.result) === 'Win') {
		box += ' win';
	} else if (result(props.result) === 'Lose') {
		box += ' lose';
	}

	return (
		<div className={box}>
			<h1>{props.title}</h1>
			{props.item && <img className='item-img' src={props.item.img} alt={props.item.name} />}
			<h2>{result(props.result)}</h2>
		</div>
	);
};

export default Box;

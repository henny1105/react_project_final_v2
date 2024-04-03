import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoxRedux from './BoxRedux';
import './Redux.css';

const Redux = () => {
	let count = useSelector((state) => state.count);
	let id = useSelector((state) => state.id);
	let password = useSelector((state) => state.password);
	let dispatch = useDispatch();

	const increase = () => {
		dispatch({ type: 'INCREMENT', payload: { num: 1 } });
	};

	const decrease = () => {
		dispatch({ type: 'DECREMENT', payload: { num: 1 } });
	};

	const reset = () => {
		dispatch({ type: 'RESET' });
	};

	const login = () => {
		dispatch({ type: 'LOGIN', payload: { id: 'hyein', password: '123' } });
	};

	return (
		<div className='redux_box'>
			<h1>
				{id},{password}
			</h1>
			<h1>{count}</h1>
			<div className='button_box'>
				<button className='increase' onClick={increase}>
					증가
				</button>
				<button className='decrease' onClick={decrease}>
					감소
				</button>
				<button className='reset_button' onClick={reset}>
					Reset
				</button>
				<button className='login_button' onClick={login}>
					Login
				</button>
			</div>
			<BoxRedux />
		</div>
	);
};

export default Redux;

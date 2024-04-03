import React, { Component } from 'react';

export default class BoxClass extends Component {
	constructor() {
		super();
		this.result = '';
	}

	// 결과에 따라 'Win', 'Lose', 또는 'Tie' 문자열 반환
	getResult(result) {
		if (result === 'win') {
			return this.props.title === 'You' ? 'Win' : 'Lose';
		} else if (result === 'lose') {
			return this.props.title === 'You' ? 'Lose' : 'Win';
		} else if (result === 'tie') {
			return 'Tie';
		}
	}

	render() {
		// 결과에 따라 box 클래스 네임 조정
		let boxClass = 'box';
		const gameResult = this.getResult(this.props.result);
		if (gameResult === 'Win') {
			boxClass += ' win';
		} else if (gameResult === 'Lose') {
			boxClass += ' lose';
		}

		return (
			<div className={boxClass}>
				<h1>{this.props.title}</h1>
				{this.props.item && <img className='item-img' src={this.props.item.img} alt={this.props.item.name} />}
				<h2>{gameResult}</h2>
			</div>
		);
	}
}

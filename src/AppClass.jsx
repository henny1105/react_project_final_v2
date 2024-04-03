import React, { Component } from 'react';
import './App.css';
// import Box from './Components/Box';
import BoxClass from './Components/sub/box/BoxClass';

const choice = {
	rock: {
		name: 'Rock',
		img: 'https://i.namu.wiki/i/EbHl4I2dCr3aoC7AFjMYv7zBAFQTE0Cr0-r2XiIKLakxARH3BY9eonE3AZ2_ctET_2vpLI-piN4F224wAUdyyQ.webp',
	},
	scissors: {
		name: 'Scissors',
		img: 'https://img.animalplanet.co.kr/news/2020/05/20/700/al43zzl8j3o72bkbux29.jpg',
	},
	paper: {
		name: 'Paper',
		img: 'https://pbs.twimg.com/media/CXuloe2UQAAdoMJ.jpg',
	},
};

export default class AppClass extends Component {
	constructor() {
		super();
		this.state = {
			userSelect: null,
			computerSelect: null,
			result: '',
		};
	}

	play = (userChoice) => {
		const userSelect = choice[userChoice];
		const computerSelect = this.randomChoice();
		const result = this.judgement(userSelect, computerSelect);
		this.setState({ userSelect, computerSelect, result });
	};

	judgement = (user, computer) => {
		if (user.name === computer.name) {
			return 'tie';
		} else if (user.name === 'Rock') {
			return computer.name === 'Scissors' ? 'win' : 'lose';
		} else if (user.name === 'Scissors') {
			return computer.name === 'Paper' ? 'win' : 'lose';
		} else if (user.name === 'Paper') {
			return computer.name === 'Rock' ? 'win' : 'lose';
		}
	};

	randomChoice = () => {
		const itemArray = Object.keys(choice);
		const randomItem = Math.floor(Math.random() * itemArray.length);
		return choice[itemArray[randomItem]];
	};

	render() {
		const { userSelect, computerSelect, result } = this.state;
		return (
			<div>
				<div className='main'>
					<BoxClass title='You' item={userSelect} result={result} />
					<BoxClass title='Computer' item={computerSelect} result={result} />
				</div>
				<div className='main'>
					<button onClick={() => this.play('scissors')}>가위</button>
					<button onClick={() => this.play('rock')}>바위</button>
					<button onClick={() => this.play('paper')}>보</button>
				</div>
			</div>
		);
	}
}

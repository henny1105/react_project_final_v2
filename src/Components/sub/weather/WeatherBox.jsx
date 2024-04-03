import React from 'react';

const WeatherBox = ({ weather }) => {
	const Fahrenheit = (celsius) => {
		return (celsius * 9) / 5 + 32;
	};
	return (
		<div className='weather_box'>
			<div>{weather?.name}</div>
			<h2>
				{weather?.main.temp}C / {Fahrenheit(weather?.main.temp).toFixed(2)}F
			</h2>
			<h3>{weather?.weather[0].description}</h3>
		</div>
	);
};

export default WeatherBox;

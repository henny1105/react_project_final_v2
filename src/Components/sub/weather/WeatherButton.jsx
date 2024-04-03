import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, selectedCity }) => {
	return (
		<div className='button_box'>
			{cities.map((city, index) => (
				<Button key={index} variant='info' className={selectedCity === city ? 'active' : ''} onClick={() => setCity(city)}>
					{city}
				</Button>
			))}
		</div>
	);
};

export default WeatherButton;

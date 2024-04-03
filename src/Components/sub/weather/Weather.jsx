import { useEffect, useState, useCallback } from 'react';
import WeatherBox from './WeatherBox';
import WeatherButton from './WeatherButton';
import './Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from 'react-spinners/ClipLoader';

function Weather() {
	const [weather, setWeather] = useState(null);
	const [city, setCity] = useState('');
	const [loading, setLoading] = useState(false);
	const cities = ['Current Location', 'tokyo', 'seoul', 'beijing', 'sydney', 'london'];

	const getWeatherByCurrentLocation = async () => {
		setLoading(true);
		navigator.geolocation.getCurrentPosition(async (position) => {
			const lat = position.coords.latitude;
			const lon = position.coords.longitude;
			const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=84bbf1bc16c21571bb35b7478e7b2d24&units=metric`;
			try {
				const response = await fetch(url);
				const data = await response.json();
				setWeather(data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		});
	};

	const getWeatherByCity = useCallback(async (selectedCity) => {
		if (selectedCity === 'Current Location') {
			getWeatherByCurrentLocation();
			return;
		}
		setLoading(true);
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=84bbf1bc16c21571bb35b7478e7b2d24&units=metric`;
		try {
			const response = await fetch(url);
			const data = await response.json();
			setWeather(data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getWeatherByCurrentLocation();
	}, []);

	useEffect(() => {
		if (city) {
			getWeatherByCity(city);
		}
	}, [city, getWeatherByCity]);

	return (
		<div className='weather_project'>
			<div className='container'>
				{loading ? (
					<ClipLoader color='#f88c6b' loading={loading} size={150} aria-label='Loading Spinner' data-testid='loader' />
				) : (
					<>
						<WeatherBox weather={weather} />
						<WeatherButton cities={cities} setCity={setCity} selectedCity={city} />
					</>
				)}
			</div>
		</div>
	);
}

export default Weather;

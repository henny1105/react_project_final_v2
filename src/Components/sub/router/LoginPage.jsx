import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setAuthenticate }) => {
	const navigate = useNavigate();

	const handleLogin = () => {
		setAuthenticate(true);
		navigate('/router_project/user');
	};

	return (
		<div>
			<h1>Login Page</h1>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};
export default LoginPage;

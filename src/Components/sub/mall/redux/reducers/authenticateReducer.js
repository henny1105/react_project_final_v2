let initialState = {
	id: '',
	password: '',
	isAuthenticated: false,
};

function authenticateReducer(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case 'LOGIN_SUCCESS':
			return {
				...state,
				id: payload.id,
				password: payload.password,
				isAuthenticated: true,
			};
		case 'LOGOUT':
			return {
				...initialState,
			};
		default:
			return { ...state };
	}
}

export default authenticateReducer;

let initialState = {
	contactList: [],
	filteredContactList: [],
};

function reducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_CONTACT':
			return {
				...state,
				contactList: [...state.contactList, { name: payload.name, phoneNumber: payload.phoneNumber }],
				filteredContactList: [...state.contactList, { name: payload.name, phoneNumber: payload.phoneNumber }],
			};
		case 'SEARCH_CONTACT':
			if (payload === '') {
				return {
					...state,
					filteredContactList: [...state.contactList],
				};
			}
			const filtered = state.contactList.filter((contact) => contact.name.includes(payload));
			return {
				...state,
				filteredContactList: filtered,
			};
		default:
			return state;
	}
}

export default reducer;

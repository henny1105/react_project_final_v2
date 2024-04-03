import React from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
	const contactList = useSelector((state) => state.filteredContactList);
	return (
		<div>
			<SearchBox />
			{contactList.map((item, index) => (
				<ContactItem item={item} key={index} />
			))}
		</div>
	);
};

export default ContactList;

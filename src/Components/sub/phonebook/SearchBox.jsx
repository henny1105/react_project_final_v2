// SearchBox.js
import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const dispatch = useDispatch();
	const contactList = useSelector((state) => state.contactList);

	const handleSearch = () => {
		dispatch({ type: 'SEARCH_CONTACT', payload: searchTerm });
	};

	const handleReset = () => {
		setSearchTerm('');
		dispatch({ type: 'SEARCH_CONTACT', payload: '' });
	};

	return (
		<Row>
			<Col>
				<Form.Control type='text' placeholder='이름을 입력해주세요.' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
			</Col>
			<Col lg={5}>
				<Button onClick={handleSearch}>찾기</Button>
				<Button className='list' onClick={handleReset}>
					리셋
				</Button>
			</Col>
		</Row>
	);
};

export default SearchBox;

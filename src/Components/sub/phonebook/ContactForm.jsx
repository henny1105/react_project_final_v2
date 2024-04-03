import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const dispatch = useDispatch();

	const addContact = (event) => {
		event.preventDefault();
		dispatch({ type: 'ADD_CONTACT', payload: { name, phoneNumber } });
	};

	return (
		<Form onSubmit={addContact}>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<Form.Label>이름</Form.Label>
				<Form.Control type='text' placeholder='이름을 입력해주세요.' onChange={(event) => setName(event.target.value)} />
			</Form.Group>
			<Form.Group className='mb-3' controlId='formContact'>
				<Form.Label>전화번호</Form.Label>
				<Form.Control type='number' placeholder='전화번호을 입력해주세요.' onChange={(event) => setPhoneNumber(event.target.value)} />
			</Form.Group>
			<Button variant='primary' type='submit'>
				추가
			</Button>
		</Form>
	);
};

export default ContactForm;

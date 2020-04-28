import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { FONT_SIZE } from '../constants/styles';
import { MdAdd } from 'react-icons/md';

const Container = styled.div`
	padding: 10px;
	display: flex;
	font-size: ${FONT_SIZE.MEDIUM};
`;

const Text = styled.input`
	font-size: inherit;
	border: none;
	border-bottom: 1px solid black;
	flex-grow: 1;
	outline: none;

	&:focus {
		border-bottom: 1px solid green;
	}
`;

const ButtonAdd = styled.button`
	font-size: inherit;
	margin-left: 1rem;
	background: none;
	border: none;

	&:hover {
		background: grey;
	}
`;

const NewTodo = ({ text, handleChange, handleSubmit }) => {
	const onEnter = (e) => {
		e.key === 'Enter' && handleSubmit();
	};

	return (
		<Card>
			<Container>
				<Text
					type="text"
					placeholder="Whatcha wanna do?"
					value={text}
					onChange={(e) => handleChange(e)}
					onKeyDown={(e) => onEnter(e)}
				/>
				<ButtonAdd onClick={(e) => handleSubmit(e)}>
					<MdAdd />
				</ButtonAdd>
			</Container>
		</Card>
	);
};

export default NewTodo;

import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import { COLORS, FONT_SIZE } from '../constants/styles';
import { MdDone } from 'react-icons/md';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
`;

const Task = styled.div`
	display: flex;
	font-size: ${FONT_SIZE.MEDIUM};
	justify-content: space-between;

	& + * {
		margin-top: 10px;
	}
`;

const Text = styled.div`
	display: flex;
	flex-grow: 1;
	align-items: center;
	padding: 5px 0 5px 5px;
	border-bottom: 1px solid black;
`;

const ButtonDone = styled.button`
	background: none;
	color: ${COLORS.GREY5};
	border: none;
	font-size: inherit;
	margin-left: 1rem;
	cursor: pointer;

	&:hover {
		background: ${COLORS.BLUE2};
	}
`;

const TodoList = ({ list, handleRemove }) => {
	return (
		<Card>
			<Container>
				{list.map((item, index) => (
					<Task key={index}>
						<Text>{item}</Text>
						<ButtonDone onClick={() => handleRemove(index)}>
							<MdDone />
						</ButtonDone>
					</Task>
				))}
			</Container>
		</Card>
	);
};

export default TodoList;

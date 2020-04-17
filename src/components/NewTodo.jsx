import React, { useState } from 'react';
import Card from './Card';
import styled, { css } from 'styled-components';
import { COLORS, FONT_SIZE } from '../constants/styles';

const UnderlineStyles = css`
	position: relative;
	&::before,
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
	}
	&::before {
		background: ${COLORS.GREY};
		transform-origin: bottom;
		transition: transform 0.2s;
	}
	&:hover::before {
		transform: scaleY(1.5);
	}
	&::after {
		background: ${COLORS.BLUE};
		transform: scaleX(0);
		transform-origin: center;
		transition: transform 0.3s;
	}
	&:focus-within::after {
		transform: scale(1, 1.5);
	}
`;

export const NewTodoContainer = styled.form`
	display: flex;
	justify-content: space-between;
`;

export const TextContainer = styled.div`
	width: 60%;
	${UnderlineStyles}
`;

export const Text = styled.input`
	width: 100%;
	border: none;
	padding: 5px 0;
	outline: none;
	font-size: ${FONT_SIZE.BASE};
`;

export const SelectContainer = styled.div`
	margin: 0 10px;
	flex: 1;
	${UnderlineStyles}
`;
export const Select = styled.select`
	text-align: center;
	border: none;
	width: 100%;
	padding: 5px 0;
	outline: none;
	text-align-last: center;
	font-size: ${FONT_SIZE.BASE};
	text-transform: capitalize;
`;

export const Option = styled.option``;

export const Button = styled.button`
	border-radius: 5px;
	border: none;
	padding: 0px 35px;
	font-weight: bold;
	color: ${COLORS.WHITE};
	background: ${COLORS.BLUE};
	cursor: pointer;

	&:hover {
		background: lighten(${COLORS.BLUE}, 30%);
	}
`;

const options = {
	schedule: 'Enter activity',
	task: 'Whatcha wanna do?',
	habbit: 'Stop it, get some help',
	motivation: 'No pain no gain',
};

const NewTodo = () => {
	const [task, setTask] = useState(options.schedule);

	return (
		<Card>
			<NewTodoContainer>
				<TextContainer>
					<Text type="text" placeholder={task}></Text>
				</TextContainer>
				<SelectContainer>
					<Select
						onChange={(e) => {
							setTask(options[e.target.value]);
						}}
					>
						{Object.keys(options).map((option) => (
							<Option value={option}>{option}</Option>
						))}
					</Select>
				</SelectContainer>
				<Button type="submit">ADD</Button>
			</NewTodoContainer>
		</Card>
	);
};

export default NewTodo;

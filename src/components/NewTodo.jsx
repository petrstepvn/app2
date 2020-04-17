import React, { useState } from 'react';
import Card from './Card';
import { NewTodoContainer, TextContainer, Text, SelectContainer, Select, Option, Button } from './NewTodo.styles';

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
							const currentTask = e.target.value;
							setTask(options.currentTask);
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

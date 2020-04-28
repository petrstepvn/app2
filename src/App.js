import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { COLORS } from './constants/styles';

const Container = styled.div`
	color: ${COLORS.GREY5};
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
`;

const App = () => {
	const [text, setText] = useState('');
	const [list, setList] = useState(['Learn React', 'Go for a walk']);

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = () => {
		text.length > 0 && setList([...list, text]);
		setText('');
	};
	console.log(list);
	const handleRemove = (index) => {
		// setList(list.filter((e) => e !== selected));
		// setList([...list.slice(0, index), ...list.slice(index + 1)]);
		setList(list.filter((_, i) => index !== i));
	};

	return (
		<div className="App">
			<GlobalStyle />
			<Header />
			<Container>
				<NewTodo text={text} handleChange={handleChange} handleSubmit={handleSubmit} />
				{list.length > 0 && <TodoList list={list} handleRemove={handleRemove} />}
			</Container>
			<Footer />
		</div>
	);
};

export default App;

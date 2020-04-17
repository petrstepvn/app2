import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/counter';
import Header from './components/header';
import NewTodo from './components/NewTodo';
import Card from './components/Card';

function App() {
	return (
		<div className="App">
			<Header />
			<NewTodo />
			<Card header="Schedule" button>
				<Counter />
			</Card>
		</div>
	);
}

export default App;

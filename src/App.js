import React, { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import Header from './components/Header';
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

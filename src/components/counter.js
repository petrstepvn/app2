import React, { useState, useEffect } from 'react';

export const Counter = () => {
	const [text, setText] = useState('');

	useEffect(() => {
		fetch('https://api.kanye.rest')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setText(data.quote);
			});
	}, []);
	return <div>{text}</div>;
};

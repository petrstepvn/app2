import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT_SIZE } from '../constants/styles';

const Container = styled.header`
	background: ${COLORS.GREY2};
	width: 100%;
	text-align: center;
	box-sizing: border-box;
	padding: 15px 10px;
	margin-bottom: 20px;
`;

const Text = styled.div`
	font-size: ${FONT_SIZE.LARGE};
`;

const Header = () => {
	return (
		<Container>
			<Text>Not so interesting Todo list</Text>
		</Container>
	);
};

export default Header;

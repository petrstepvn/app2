import React from 'react';
import styled from 'styled-components';
import { COLORS, FONT_SIZE } from '../constants/styles';

const Container = styled.div`
	box-shadow: 0 0 10px black;
	padding: 15px;
	text-align: center;
	background-color: white;
`;

const Title = styled.div`
	color: ${COLORS.BLUE};
	font-size: ${FONT_SIZE.LARGE};
	font-weight: 500;
`;

const Header = () => {
	return (
		<Container>
			<Title>Personal Growth App</Title>
		</Container>
	);
};

export default Header;

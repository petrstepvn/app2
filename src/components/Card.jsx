import React from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS } from '../constants/styles';

const CardContainer = styled.div`
	box-sizing: border-box;
	background: white;
	border-radius: ${BORDER_RADIUS};
	margin: 20px auto;
	width: 400px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const Card = ({ children }) => {
	return <CardContainer>{children}</CardContainer>;
};

export default Card;

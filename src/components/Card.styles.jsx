import styled from 'styled-components';
import { COLORS, FONT_SIZE, BORDER_RADIUS } from '../constants/styles';

export const CardContainer = styled.div`
	background: white;
	border-radius: ${BORDER_RADIUS};
	margin: 20px auto;
	width: 600px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const CardHeader = styled.h2`
	font-size: ${FONT_SIZE.MEDIUM};
	text-align: center;
	padding-bottom: 7px;
	margin: 0;
	border-bottom: 1px solid #bbb;
`;

export const CardBody = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
`;

export const Text = styled.div`
	padding: 7px;
	flex: 1;
`;

export const Button = styled.button`
	position: relative;
	bottom: 0;
	right: 0;
	height: 40px;
	width: 40px;
	border: none;
	background: ${COLORS.RED};
	align-self: flex-end;
	/* border-bottom-right-radius: ${BORDER_RADIUS}; */
	&:hover {
		cursor: pointer;
	}
`;

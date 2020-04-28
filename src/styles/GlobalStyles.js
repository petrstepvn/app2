import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/styles';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: 'Roboto', sans-serif;
		font-size: 1.2rem;
		background-color: #d7dadb;
		background: ${COLORS.GREY1};
		color: ${COLORS.GREY3} 
	}
	
	.App {
		position: relative;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export default GlobalStyle;

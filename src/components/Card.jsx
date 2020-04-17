import React from 'react';
import { CardContainer, CardHeader, CardBody, Text, Button } from './Card.styles';

const Card = ({ header, button, children }) => {
	return (
		<CardContainer>
			{header ? <CardHeader>{header}</CardHeader> : null}
			<CardBody>
				<Text>{children}</Text>
				{button ? <Button>Roll</Button> : null}
			</CardBody>
		</CardContainer>
	);
};

export default Card;

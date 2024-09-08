import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box
			borderRadius={10}
			overflow='hidden'
			transition='transform 0.3s ease-in-out'
			_hover={{
				transform: 'scale(1.05)',
				boxShadow: 'xl',
			}}
		>
			{children}
		</Box>
	);
};
export default GameCardContainer;

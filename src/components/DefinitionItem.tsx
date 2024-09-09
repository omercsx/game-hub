import { Box, Heading } from '@chakra-ui/react';

interface Props {
	term: string;
	children: React.ReactNode;
}

const DefinitionItem = ({ term, children }: Props) => {
	return (
		<Box marginY={5} as='dl'>
			<Heading as='dt' fontSize='md' color='gray.600'>
				{term}
			</Heading>
			<dd>{children}</dd>
		</Box>
	);
};
export default DefinitionItem;

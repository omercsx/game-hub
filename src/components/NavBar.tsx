import { HStack, Image, Text } from '@chakra-ui/react';

const NavBar = () => {
	return (
		<HStack>
			<Image
				src='https://omercsx.s3.ca-central-1.amazonaws.com/frontend-projects/gamehub/Gamehub_logo.svg'
				boxSize='80px'
			/>
			<Text>NavBar</Text>
		</HStack>
	);
};
export default NavBar;

import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
	return (
		<HStack justifyContent='space-between' padding='10px'>
			<Image
				src='https://omercsx.s3.ca-central-1.amazonaws.com/frontend-projects/gamehub/Gamehub_logo.svg'
				boxSize='80px'
			/>
			<ColorModeSwitch />
		</HStack>
	);
};
export default NavBar;

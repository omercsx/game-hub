import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
	return (
		<HStack padding='10px'>
			<Image
				src='https://omercsx.s3.ca-central-1.amazonaws.com/frontend-projects/gamehub/Gamehub_logo.svg'
				boxSize='80px'
			/>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};
export default NavBar;

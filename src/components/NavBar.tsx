import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<HStack padding='10px'>
			<Link to='/'>
				<Image
					src='https://omercsx.s3.ca-central-1.amazonaws.com/frontend-projects/gamehub/Gamehub_logo.svg'
					boxSize='80px'
				/>
			</Link>
			<SearchInput />
			<ColorModeSwitch />
		</HStack>
	);
};
export default NavBar;

import { HStack, Image, Text, keyframes } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const animateText = keyframes`
  0% { color: #ff0000; transform: translateY(0); }
  25% { color: #00ff00; transform: translateY(-5px); }
  50% { color: #0000ff; transform: translateY(0); }
  75% { color: #ff00ff; transform: translateY(-5px); }
  100% { color: #ff0000; transform: translateY(0); }
`;

const NavBar = () => {
	return (
		<HStack padding='10px'>
			<Link to='/'>
				<Image
					src='https://omercsx.s3.ca-central-1.amazonaws.com/frontend-projects/gamehub/Gamehub_logo.svg'
					boxSize='80px'
					objectFit='cover'
				/>
			</Link>
			<SearchInput />
			<Text 
				as='a' 
				href='https://omer.lol' 
				target='_blank'
				sx={{
					animation: `${animateText} 2s infinite`,
					fontWeight: 'bold',
					'&:hover': {
						textDecoration: 'none',
					},
				}}
			>
				Omer
			</Text>
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;

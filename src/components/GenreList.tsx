import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from '@chakra-ui/react';
import useGenres, { type Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data, error, isLoading } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<List>
			{data.map(genre => (
				<ListItem key={genre.id} paddingY='5px'>
					<HStack>
						<Image
							boxSize='32px'
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Button
							fontSize='lg'
							variant='link'
							onClick={() => onSelectGenre(genre)}
							fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
							color={genre.id === selectedGenre?.id ? 'blue.500' : 'gray.500'}
							_hover={{
								color: 'blue.400',
								transform: 'translateX(5px)',
								transition: 'all 0.2s',
							}}
						>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};
export default GenreList;

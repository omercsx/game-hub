import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import type { GameQuery } from '../App';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading, fetchNextPage, hasNextPage } =
		useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	if (error) return <Text color='red'>{error.message}</Text>;

	const fetchGamesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

	return (
		<InfiniteScroll
			dataLength={fetchGamesCount}
			hasMore={hasNextPage}
			next={() => fetchNextPage()}
			loader={<Spinner />}
		>
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={6}
				padding={10}
			>
				{isLoading &&
					skeletons.map(skeleton => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map(game => (
							<GameCardContainer key={game.id}>
								<GameCard game={game} />
							</GameCardContainer>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
		</InfiniteScroll>
	);
};
export default GameGrid;

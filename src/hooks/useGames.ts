import { useInfiniteQuery } from '@tanstack/react-query';
import type { GameQuery } from '../App';
import APIClient, { type FetchResponse } from '../services/api-client';
import type { Platform } from './usePlatforms';

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
	useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platform: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
		initialPageParam: 1,
		staleTime: 24 * 60 * 60 * 1000, // 24hr
	});

export default useGames;

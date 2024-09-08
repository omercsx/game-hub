import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '5b81286106bd4b0f9a93b0c025a3638e',
	},
});

export interface FetchResponse<T> {
	count: number;
	results: T[]
}
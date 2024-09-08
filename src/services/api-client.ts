import axios, { type AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '5b81286106bd4b0f9a93b0c025a3638e',
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then(res => res.data);
	};
}

export default APIClient;

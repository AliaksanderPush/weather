import axios from 'axios';

class Api {
	constructor() {
		this._apiKey = 'e3798a8ce54ffa97f4e8768af4462a8d';
		this._apiBase = 'https://api.openweathermap.org/data/2.5/';
		this.part = 'hourly,minutely';
		this.cityesUrl =
			'https://gist.githubusercontent.com/alex-oleshkevich/6946d85bf075a6049027306538629794/raw/3986e8e1ade2d4e1186f8fee719960de32ac6955/by-cities.json';
	}

	async getWheather(lat, lon) {
		try {
			const response =
				await axios.get(`${this._apiBase}onecall?lat=${lat}&lon=${lon}&exclude=${this.part}
			&appid=${this._apiKey}`);
			return response.data;
		} catch (err) {
			console.log(err);
			return Promise.reject(err);
		}
	}
	async getCity() {
		try {
			const response = await axios.get(`${this.cityesUrl}`);
			return response.data;
		} catch (err) {
			console.log(err);
			return Promise.reject(err);
		}
	}
}

export const api = new Api();

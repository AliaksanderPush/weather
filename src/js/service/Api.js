import axios from 'axios';

class Api {
	constructor() {
		this._apiKey = 'e3798a8ce54ffa97f4e8768af4462a8d';
		this._apiBase = 'https://api.openweathermap.org/data/2.5/onecall?lat=';
		this.part = 'hourly,minutely';
	}

	async getWheather(lat, lon) {
		try {
			const response = await axios.get(`${this._apiBase}${lat}&lon=${lon}&exclude=${this.part}
			&appid=${this._apiKey}`);
			return response.data;
		} catch (err) {
			console.log(err);
			return Promise.reject(err);
		}
	}
}

export const api = new Api();
